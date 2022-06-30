import { AppDataSource } from './data-source';
import { UsersEntity } from './users/UsersEntity';
import { City } from './entity/City';

AppDataSource.initialize()
  .then(async () => {
    console.log('Inserting a new user into the database...');
    const city = new City();
    city.name = 'Taraz';
    await AppDataSource.manager.save(city);
    const user = new UsersEntity();
    user.first_name = 'Timber';
    user.last_name = 'Saw';
    user.role = 1;
    user.password = '1234';
    user.city = city.id;
    await AppDataSource.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);

    console.log('Loading users from the database...');
    const users = await AppDataSource.manager.find(UsersEntity);
    const cities = await AppDataSource.manager.find(City);
    console.log('Loaded users: ', users);
    console.log('Loaded cities: ', cities);
  })
  .catch((error) => console.log(error));
