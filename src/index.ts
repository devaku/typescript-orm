import { AppDataSource } from './dataSource';
import { User } from './entity/User';

AppDataSource.initialize()
	.then(async () => {
		const Users = await AppDataSource.manager.find(User);

		console.log(Users);
	})
	.catch((e) => console.log(e));
