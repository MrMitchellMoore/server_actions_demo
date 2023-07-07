import { addProductToDatabase } from "../serverActions";

export function ProductForm() {
  return (
    <div className="flex max-sm:flex-col justify-center items-center mt-8">
      <h2 className="font-bold text-5xl p-5 text-center">List of Products</h2>
      <form
        className="flex max-sm:flex-col gap-4 max-sm:mb-4"
        action={addProductToDatabase}
      >
        <input
          className="border border-gray-300 p-2 rounded-md max-sm:max-w-sm"
          placeholder="Enter Product name..."
          name="product"
        />
        <input
          className="border border-gray-300 p-2 rounded-md max-sm:max-w-sm"
          placeholder="Enter Product price..."
          name="price"
        />
        <button className="bg-gray-600 hover:bg-gray-300 hover:text-black p-2 rounded-md font-bold text-white">
          Add Product
        </button>
      </form>
    </div>
  );
}
