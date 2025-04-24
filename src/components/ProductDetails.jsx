import React from "react";
import { useGetProductByIdQuery } from "../lib/api/productsApi";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetProductByIdQuery(id);

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

  const r = Math.round(data.rating.rate);
  return (
    <div className="max-w-[1200px] mx-auto px-5 py-10">
      <div className="flex gap-5">
        <div className="w-[400px] flex-shrink-0 aspect-square">
          <img
            src={data.image}
            className="w-full h-full object-contain"
            alt={data.title}
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{data.title}</h1>
          <p className="mt-2 text-black/40 rounded-full border inline-block px-2 text-sm ">
            {data.category}
          </p>
          <p className="text-lg mt-3 text-black/50">{data.description}</p>
          <div className="py-3 flex items-center justify-between">
            <div className="flex gap-1 items-center ">
              {new Array(5).fill().map((_, i) => (
                <i
                  className={`fa fa-star  ${
                    i + 1 <= r ? "text-yellow-400" : "text-black/30"
                  }`}
                  key={i}
                ></i>
              ))}
            </div>
            <p className="text-black/40">
              <i className={`fa fa-eye me-1`}></i>
              {data.rating.count}
            </p>
          </div>
          <p className="text-3xl font-semibold mt-2">${data.price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
