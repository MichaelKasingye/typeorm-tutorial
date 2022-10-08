import { DataSource } from 'typeorm';
import { word } from './note';

const main = async () => {
	try {
		const AppDataSource = await new DataSource({
            type: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "test",
            database: "postgres",
        })


		console.log('Connected to Postgres');

		

		// app.listen(8080, () => {
		// 	console.log('Now running on port 8080');
		// });
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect to db');
	}
};
