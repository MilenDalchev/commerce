import { sql } from '@vercel/postgres';
import { ProductField } from './definitions';

export async function fetchProducts() {
	try {
		const data = await sql<ProductField>`
			SELECT
				id,
				image,
				description,
				startingprice,
				name 
      FROM Products
			ORDER BY id ASC    
		`;

		const products = data.rows;
		return products;
	} catch (err) {
		console.error('Database error: ', err);
		throw new Error('Failed to fetch all Products');
	}
}