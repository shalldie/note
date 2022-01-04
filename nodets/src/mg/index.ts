import path from 'path';
import {createConnection, getMongoRepository, Like} from 'typeorm';
import {Category, Photo} from './entities';

async function main() {
    const conn = await createConnection();

    const photo = new Photo();
    photo.title = 'this is first photo3';
    // photo.categories.push({
    //     name: 'memeda'
    // });

    const photoRespository = getMongoRepository(Photo);
    // console.log(JSON.stringify(photo));
    // await photoRespository.save(photo);
    // console.log(JSON.stringify(photo));

    // const list = await photoRespository.find();
    // console.log(list);

    // await photoRespository.save(photo);

    // await photoRespository.remove()

    const list = await photoRespository.find({
        where: {
            'categories.0': {$exists: 1}
        }
    });

    photoRespository.findOne({
        title: 'fdsaf'
    });

    console.log(list);
    // console.log(list[0].categories[0].name);
    // console.log(JSON.stringify(list, null, '  '));

    // photoRespository.find({});

    // photoRespository.remove(list);

    // conn.close();
}

main();
