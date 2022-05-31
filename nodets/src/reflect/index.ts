// declare type ClassDecorator = <TFunction extends Function>(target: TFunction) => TFunction | void;
// declare type PropertyDecorator = (target: Object, propertyKey: string | symbol) => void;
// declare type MethodDecorator = <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// declare type ParameterDecorator = (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

import {Inject, Injectable, ioc} from 'iocoo';
import 'reflect-metadata';

// export class Container {
//     private map = new Map<object, object>();

//     public has(constructor: object) {
//         return this.map.has(constructor);
//     }

//     public get<T>(constructor: object) {
//         // console.log(constructor);
//         if (!this.has(constructor)) {
//             throw Error('Constructor is not injectable');
//         }

//         // this.set(constructor,
//         //     this.map.get(constructor) || new constructor()
//         //     )
//         return this.map.get(constructor) as any as T;
//     }

//     public set(constructor: object, value: any) {
//         return this.map.set(constructor, value);
//     }
// }

// const co = new Container();

// const INJECTABLE_WATERMARK = '__injectable__';

// export function Injectable(): ClassDecorator {
//     return (target: any) => {
//         console.log('injectable target', target.name);

//         // console.log(target);
//         // if (options.singleton) {
//         co.set(target, new target());
//         // }
//         Reflect.defineMetadata(INJECTABLE_WATERMARK, true, target);
//     };
// }

// export function Inject(): PropertyDecorator {
//     return (target: Object, propertyKey: string | symbol) => {
//         // console.log('target', target);
//         const Dependency = Reflect.getMetadata('design:type', target, propertyKey);
//         console.log('Dependency', Dependency);

//         // const _id = id || Reflect.getMetadata('cus:id', Dependency);
//         // const _dependency = Container.get(_id);

//         // const instance = co.get(Dependency);

//         // 给属性注入依赖
//         Reflect.defineProperty(target, propertyKey, {
//             // value: instance,
//             enumerable: true,
//             get() {
//                 return co.get(Dependency);
//             }
//         });
//     };
// }

@Injectable({singleton: true})
export class Child {
    constructor() {
        console.log('create child');
    }

    name = 'tom';

    age = 'lily';

    @Inject()
    public child!: Child;
}

@Injectable()
export class Person {
    // constructor(public child: Child) {}

    @Inject()
    child!: Child;

    public getMessage() {
        // return this.name + ' - ' + this.age;
    }
}

const p = ioc.getInstance(Person);
console.log(p);

console.log('ok');
