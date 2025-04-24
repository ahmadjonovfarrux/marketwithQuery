import { useGetAllProductsQuery } from "../lib/api/productsApi";
import ProductCard from "./ProductCard";

function Products() {
  const { data, isLoading, error } = useGetAllProductsQuery();
  if (error) {
    return (
      <div className="w-full py-10 text-center text-3xl font-bold text-red-500 opacity-90">
        <i className="fa fa-bug"></i> Something went wrong, Please try again!
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="w-full py-10 text-center text-3xl font-bold text-black opacity-90">
        <i className="fa fa-circle-notch fa-spin"></i> Loading...
      </div>
    );
  }

  return (
    <div className="gird-cols-2 grid md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 container">
      {data &&
        data.map((d) => {
          return <ProductCard product={d} key={d.id} />;
        })}
    </div>
  );
}

export default Products;
