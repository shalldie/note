import {Column, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

export class Category {
    @Column()
    name!: string;
}

@Entity({name: 'photo'})
export class Photo {
    @ObjectIdColumn()
    id!: ObjectID;

    @Column()
    title!: string;

    @Column(type => Category)
    categories: Category[] = [];
}
