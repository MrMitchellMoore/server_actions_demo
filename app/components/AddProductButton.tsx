"use client";

import { useTransition } from "react";
import { addProductToDatabase } from "../serverActions";

export default function AddProductButton() {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      onClick={() =>
        startTransition(() => {
          addProductToDatabase;
        })
      }
      className="bg-gray-600 hover:bg-gray-300 hover:text-black p-2 rounded-md font-bold text-white"
    >
      {isPending ? "Adding..." : "Add Product"}
    </button>
  );
}
