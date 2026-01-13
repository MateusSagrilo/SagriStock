// import { Action } from "./Products.reducer"
import { ProductCreator } from "../../components/Products/ProductForm";
import { createAction } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/Products.service";
import { Thunk } from "..";
import { Product } from "../../shared/Table/Table.mockdata";

// export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
//   return {
//     type: 'INSERT_NEW_PRODUCT',
//     payload
//   }
// }
export const getProducts = (): Thunk<Product[]> => async (dispatch: any) => {
  const products = await getAllProducts();
  dispatch({
    type: "FETCH_PRODUCTS",
    payload: products,
  });
};

export const insertNewProduct = createAction<ProductCreator>(
  "products/insertNewProduct"
);
