import fetchListOfProducts from "@/actions/index";

async function ServerActionsExample() {
  const products = await fetchListOfProducts();

  return (
    <div className="">
      <h1>Server action examples - server components</h1>
      <ul className="">
        {products && products.length > 0 ? (
          products.map((item) => <li className="">{item.title}</li>)
        ) : (
          <h1>product not found</h1>
        )}
      </ul>
    </div>
  );
}

export default ServerActionsExample;
