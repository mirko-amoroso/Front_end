import { iProduct } from "./i-products";

export interface iObj {
  products:iProduct[],
  total:number,
  skip:number,
  limit:number
}
