import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Post } from './entity/Post';
import { User } from './entity/User';

export const AppDataSource = new DataSource({
	type: 'mysql',

	// ENV
	host: 'localhost',
	port: 3306,
	username: 'root',
	password: '',
	database: 'test',

	entities: [Post, User],
	synchronize: true,
	logging: false,
});
