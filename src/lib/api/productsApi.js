import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    getProductById: builder.query({
      query: (id) => `products/${id}`,
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } = productsApi;
export default productsApi;
