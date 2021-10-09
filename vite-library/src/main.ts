import './style.css';

function sleep(delay: number) {
    return new Promise<void>(resolve => {
        setTimeout(() => {
            resolve();
        }, delay);
    });
}

export async function sayHello() {
    for (let i = 0; i < 10; i++) {
        console.log(i);
        await sleep(1000);
    }
}
