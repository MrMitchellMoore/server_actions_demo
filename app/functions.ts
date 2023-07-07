import { Product } from "@/typings";

const currency = function (number: string) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(Number(number));
};

async function getProducts(): Promise<Array<Product>> {
  const res = await fetch(`${process.env.productApi}`, {
    cache: "no-cache",
    next: {
      tags: ["products"],
    },
  });
  return res.json();
}

export { currency, getProducts };
