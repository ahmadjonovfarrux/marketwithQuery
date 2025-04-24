import React from "react";
import Products from "./Products";

function Home() {
  return (
    <div>
      <div>
        <h1 className=" text-5xl py-3 text-center font-bold border-black/20 border-b-2 mb-5">
          Market
        </h1>
        <Products />
      </div>
    </div>
  );
}

export default Home;
