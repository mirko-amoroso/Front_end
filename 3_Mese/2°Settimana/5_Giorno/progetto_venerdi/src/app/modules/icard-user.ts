import { iTodo } from "./i-todo";

export interface iCardUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  title: string;
  todo:iTodo[];
}
