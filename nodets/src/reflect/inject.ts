import {INJECTABLE_WATERMARK} from './constants';

const InjectableMap = new Map<object, object | undefined>();

export function Injectable(): ClassDecorator {
    return (target: any) => {
        // console.log(target);
        InjectableMap.set(target, new target());
        Reflect.defineMetadata(INJECTABLE_WATERMARK, true, target);
    };
}

export function Inject(): PropertyDecorator {
    return (target: Object, propertyKey: string | symbol) => {
        // console.log(target);
        const Dependency = Reflect.getMetadata('design:type', target, propertyKey);
        // console.log(Dependency);

        // const _id = id || Reflect.getMetadata('cus:id', Dependency);
        // const _dependency = Container.get(_id);

        const _dependency = create(Dependency);

        // 给属性注入依赖
        Reflect.defineProperty(target, propertyKey, {
            value: _dependency
        });
    };
}

export function create<T extends new (...args: any) => any>(Constructor: T) {
    if (!InjectableMap.has(Constructor)) {
        throw Error('Constructor is not injectable');
    }

    let instance = InjectableMap.get(Constructor);
    if (!instance) {
        InjectableMap.set(Constructor, new Constructor());
    }

    return InjectableMap.get(Constructor) as InstanceType<T>;
}
