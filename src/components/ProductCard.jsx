import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const r = Math.round(product.rating.rate);
  return (
    <Link
      to={`/product/${product.id}`}
      className="rounded shadow relative border border-black/20 transition-all group/card"
    >
      <div className="aspect-[6/4] w-full overflow-hidden">
        <img
          className="w-full h-full object-contain group-hover/card:scale-110 transition-all duration-300"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="p-3 pb-14 gap-2 flex flex-col">
        <span className="text-sm text-black/40">{product.category}</span>
        <h3 className="font-[600] line-clamp-2">{product.title}</h3>
        <p className="line-clamp-3 text-black/60">{product.description}</p>
        <div className=" absolute bottom-0 end-0 p-3 w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            {new Array(5).fill().map((s, i) => (
              <i
                key={Math.random()}
                className={`fa fa-star ${
                  i + 1 <= r ? "text-yellow-400" : "text-black/20"
                }`}
              ></i>
            ))}
          </div>
          <p className="text-black-40  ">
            <i className="fa fa-eye me-1"></i>
            {product.rating.count}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
