import 'dotenv/config';
import { dataSource } from './dataSource';

import { User } from './entity/User';



async function testQuery() {
	// Connect to the database
	let serviceDS = await dataSource;

	// Interact with database
	const Users = await serviceDS.manager.find(User);
	console.log(Users);
}

async function transactionTest() {
	// Connect to the database
	let serviceDS = await dataSource;

	// Interact with database

	const Users = await serviceDS.transaction(
		async (transactionalEntityManager) => {
			const user = new User();
			user.firstName = 'TRANSACTION FIRST';
			user.lastName = 'Saw';
			user.age = 25;

			await transactionalEntityManager.save(user);

			let rows = await transactionalEntityManager.find(User);
			return rows;
		}
	);

	console.log(Users);
}

async function queryBuilder() {
	let serviceDS = await dataSource;
	// const user = await serviceDS.manager
	// 	.createQueryBuilder(User, 'user')
	// 	.where('user.id = :id', { id: 1 })
	// 	.getQueryAndParameters();

	// console.log(user);

	const qb = serviceDS.manager.createQueryBuilder(User, 'user');

	let determiner = 4;

	if (determiner == 1) {
		qb.where('user.id = :id', { id: 1 });
	} else {
		qb.where('user.id = :id', { id: 4 });
	}

	let rows = await qb.getOne();

	console.log(rows);
}

// transactionTest();

// queryBuilder();
