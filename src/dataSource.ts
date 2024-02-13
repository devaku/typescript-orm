import 'reflect-metadata';
import { DataSource } from 'typeorm';

const connToDS = async () => {
	const dataSourceConn = new DataSource({
		type: 'mysql',

		// ENV
		host: process.env.DB_HOST,
		port: Number(process.env.DB_PORT),
		username: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,

		entities: [`${__dirname}/entity/*.{j,t}s`],
		migrations: [`${__dirname}/migrations/*.{j,t}s`],
		synchronize: true,
		logging: false,
	});
	try {
		await dataSourceConn.initialize();
		console.log('Data Source has been initialized!');

		return dataSourceConn;
	} catch (err) {
		console.error('Error during Data Source initialization', err);
		throw err;
	}
};

export const dataSource = connToDS();
