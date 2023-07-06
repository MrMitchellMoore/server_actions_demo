export default function Home() {
  return (
    <>
      <header className="flex flex-col justify-center items-center w-full bg-gray-500">
        <h1 className="font-bold text-7xl text-center">Next Server Actions</h1>
        <div className="mt-10">
          <h1 className="font-bold text-3xl text-center">Product Warehouse</h1>
        </div>
      </header>
      <main className="w-full">
        <div className="flex justify-center items-center mt-24">
          <form className="flex gap-4" action="">
            <input
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter Product name..."
              type="text"
            />
            <input
              className="border border-gray-300 p-2 rounded-md"
              placeholder="Enter Product price..."
              type="text"
            />
            <button className="bg-gray-600 hover:bg-gray-300 hover:text-black p-2 rounded-md font-bold text-white">
              Add Product
            </button>
          </form>
        </div>
      </main>
    </>
  );
}
