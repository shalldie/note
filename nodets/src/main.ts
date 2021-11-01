// `甲乙两人分别从相聚20公里的AB 两地相向而行，甲有一只小狗和甲同时出发，

// 甲的速度为6公里每小时，小狗的速度为每小时20公公里，乙的速度为每小时4公里。

// 在甲乙行走过程中,小狗先从甲的位置向乙跑去,遇到乙以后马上掉头跑向甲,
// 遇到甲又马上掉头跑向乙一直在甲乙之间不断往返，直到两人相遇。

// 请问两人相遇时小狗向乙的方向跑的总距离为多少公里?`;

// const JIA_SPEED = 6;
// const YI_SPEED = 4;
// const GOU_SPEED = 20;

// let xg = 0;
// let x1 = 0;
// let x2 = 20;

// function getDuration(length: number) {}

// console.log('hello');

// console.log('hello');

// console.log('hello world');

// type ReturnTypeX<T> = T extends (...args: any[]) => infer R ? R : T;

// function demo(): [number, string] {}

// type tt = ReturnTypeX<typeof demo>;

// class SomeClass {
//     someMethod(): string {
//         return 'hello world';
//     }
// }

// type Tpromisify<T> = T extends (...arg: infer R) => void ? Promise<R> : Promise<void>;

// function Action1(s: string, age: number) {}

// type tt = Tpromisify<typeof Action1>;

// function promisify<T extends (...args: any[]) => void>(
//     useAction: T
// ): T extends (...arg: infer R) => void ? Promise<R> : Promise<void> {
//     return new Promise<any>(resolve => {
//         useAction((...args: any[]) => {
//             resolve(args);
//         });
//     });
// }

// function main() {}

function test(content: string) {
    // console.log(/^((\S)(\2){2})*$/.test(content) && !/(\S)\S{2,}\1/.test(content));
    // const reg = /^(?=(\S)\S{2,}\1)((\S)(\2){2})*$/;
    const reg = /^(?!.*(\S)\S{2,}\1)((\S)(\3){2})*$/;
    console.log(reg.test(content));
}

test('111222333');
test('11122333');
test('111222111');

const arr = [1, 2, 3] as const;

type TItem = typeof arr[number];

interface ISomeType {
    name: string;
    otherField: string;
}

type TBala = Partial<ISomeType> & Pick<ISomeType, 'name'>;

var item:TBala = {
    
}
