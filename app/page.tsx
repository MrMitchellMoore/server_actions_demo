import { ProductForm } from "./components";
import SingleProduct from "./components/Product";
import { currency, getProducts } from "./functions";

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <main className="w-full">
        <ProductForm />
        <div className="w-full flex justify-center">
          <div className="max-w-5xl border-2 flex flex-wrap gap-5 justify-center items-center mb-2">
            {products.map((p) => (
              <div key={p.id} className="my-2">
                <SingleProduct p={p} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
