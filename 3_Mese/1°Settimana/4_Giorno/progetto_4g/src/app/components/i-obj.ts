import {iPost} from "./i-post"
export interface iObj {
  posts: iPost[];
  total: number;
  skip: number;
  limit:number;
}
