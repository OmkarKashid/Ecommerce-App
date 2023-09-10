import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products"
    }),
    getMenClothingProducts: builder.query({
      query: () => "products/category/men's%20clothing"
    }),
    getWomenClothingProducts: builder.query({
      query: () => "products/category/women's%20clothing"
    }),
    getJeweleryProducts: builder.query({
      query: () => "products/category/jewelery"
    }),
    getElectronicsProducts: builder.query({
      query: () => "products/category/electronics"
    }),
    getProductById: builder.query({
      query: (id) => "products/" + id
    })
  })
});

export const {
  useGetAllProductsQuery,
  useGetMenClothingProductsQuery,
  useGetWomenClothingProductsQuery,
  useGetJeweleryProductsQuery,
  useGetElectronicsProductsQuery,
  useGetProductByIdQuery
} = productsApi;
