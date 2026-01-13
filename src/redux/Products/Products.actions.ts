
// import { Action } from "./Products.reducer"
import { ProductCreator } from "../../components/Products/ProductForm"
import { createAction } from '@reduxjs/toolkit'

// export const insertNewProduct = (payload: ProductCreator): Action<ProductCreator> => {
//   return {
//     type: 'INSERT_NEW_PRODUCT',
//     payload
//   }
// }

export const insertNewProduct = createAction<ProductCreator>(
  'products/insertNewProduct'
)
