async function ServerActionsExample() {
  async function fetchListOfProducts() {
    "use server";
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    return data?.products;
  }

  const products = await fetchListOfProducts();
  console.log(products);

  return (
    <div className="">
      <h1>Server action examples - server components</h1>
    </div>
  );
}

export default ServerActionsExample;
