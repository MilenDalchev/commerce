import { fetchProducts } from '@/app/lib/data';

export default async function Home() {
  const products = await fetchProducts();

  return (
      <>
        {products.map((product) => {
          return (
            <article key={product.id}>
              <div className="image">{product.image}</div>
              <h3>{product.name}</h3>
              <div>{product.description}</div>
              <div>Price: {product.startingprice}</div>
            </article>
          )
        })}
      </>
  );
}
