import 'reflect-metadata';
require('dotenv').config({ path: '../.env' });
import { DataSource } from 'typeorm';

export default new DataSource({
	type: 'mysql',

	// ENV
	host: process.env.DB_HOST,
	port: Number(process.env.DB_PORT),
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,

	entities: [`${__dirname}/entity/*.{j,t}s`],
	migrations: [`${__dirname}/migrations/*.{j,t}s`],
	migrationsTableName: 'migrations',
	synchronize: true,
	logging: false,
});
