import { currency } from "../functions";
import type { Product } from "@/typings";

export default function SingleProduct({ p }: { p: Product }) {
  return (
    <div className="bg-slate-800 text-slate-50 p-4 flex flex-col content-center items-center">
      <p className="text-xl">{p.product.toUpperCase()}</p>
      <p>{currency(p.price)}</p>
    </div>
  );
}
