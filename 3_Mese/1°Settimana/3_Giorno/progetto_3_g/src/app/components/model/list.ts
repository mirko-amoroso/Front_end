import { iPost } from './post';
export interface iList{
  posts:iPost[]
  total: number,
  skip: number,
  limit: number
}
