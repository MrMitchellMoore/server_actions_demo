type Product = {
  id?: string;
  product: string;
  price: string;
};

async function getProducts(): Promise<Array<Product>> {
  const res = await fetch(`${process.env.productApi}`, { cache: "no-cache" });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <header className="flex flex-col justify-center items-center w-full bg-gray-500">
        <h1 className="font-bold text-7xl text-center">Next Server Actions</h1>
        <div className="mt-10">
          <h1 className="font-bold text-3xl text-center">Product Warehouse</h1>
        </div>
      </header>
      <main className="w-full">
        <div className="flex max-sm:flex-col justify-center items-center mt-8">
          <h2 className="font-bold text-5xl p-5 text-center">
            List of Products
          </h2>
          <form className="flex max-sm:flex-col gap-4 max-sm:mb-4" action="">
            <input
              className="border border-gray-300 p-2 rounded-md max-sm:max-w-sm"
              placeholder="Enter Product name..."
              type="text"
            />
            <input
              className="border border-gray-300 p-2 rounded-md max-sm:max-w-sm"
              placeholder="Enter Product price..."
              type="text"
            />
            <button className="bg-gray-600 hover:bg-gray-300 hover:text-black p-2 rounded-md font-bold text-white">
              Add Product
            </button>
          </form>
        </div>

        <div className="w-full flex justify-center">
          <div className="max-w-5xl border-2 flex flex-wrap gap-5 justify-center items-center mb-2">
            {products.map((p) => (
              <div key={p.id} className="my-2">
                <div className="bg-slate-800 text-slate-50 p-4 flex flex-col content-center items-center">
                  <p className="text-xl">{p.product}</p>
                  <p>{p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
