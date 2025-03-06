"use client";

import fetchListOfProducts from "@/actions";
import { useEffect, useState } from "react";

export default function ClientPageExample() {
  const [products, setProducts] = useState([]);

  async function getListOfProducts() {
    const data = await fetchListOfProducts();
    console.log(data);
    if (data) setProducts(data);
  }

  useEffect(() => {
    getListOfProducts();
  }, []);
  return (
    <div>
      <h1>Client page server actions example</h1>
      {products && products.length > 0 ? (
        products.map((item) => <li className="">{item.title}</li>)
      ) : (
        <h1>product not found</h1>
      )}
    </div>
  );
}
