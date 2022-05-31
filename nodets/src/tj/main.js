const fs = require('fs');
const glob = require('glob');

function countProjectHZ(projectPath) {
    let count = 0;
    const arr = glob.sync(`${projectPath}/src/**/*.vue`);
    for (const filePath of arr) {
        const content = fs.readFileSync(filePath, 'utf-8');
        const zhongwen = content.match(/[\u4e00-\u9fa5]/g) || [];
        count += zhongwen.length;
    }
    return count;
}

function main() {
    let count = 0;

    const list = ['afe-annotate', 'afe-dataset', 'afe-etl', 'afe-mulan', 'afe-dcl', 'afe-label'];

    for (const name of list) {
        count += countProjectHZ(`/xxx/${name}`);
    }
    console.log(count);
}

main();
