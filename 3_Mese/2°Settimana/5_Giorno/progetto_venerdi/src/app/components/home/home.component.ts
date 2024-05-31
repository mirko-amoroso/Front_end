import { Component } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { iPostAutore } from '../../modules/post-autore';;
import { iUser } from '../../modules/i-user';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private todos_s_h: TodosService,
    private users_s_h: UsersService
  ) {}

  todos_arr = this.todos_s_h.todos;
  users_arr = this.users_s_h.users;

  array_finale: iPostAutore[] = [];

  ngOnInit() {
    this.array_finale = this.todos_s_h.get_post(this.users_arr);
  }

  // get_post = (): void => {
  //   this.todos_arr.forEach((todo) => {
  //     let user_return: iUser | undefined = this.users_arr.find(
  //       (u) => u.id == todo.userId
  //     )
  //       ? this.users_arr.find((u) => u.id == todo.userId)
  //       : undefined;
  //     if (user_return !== undefined) {
  //       this.array_finale.push({
  //         id: todo.id,
  //         todo: todo.todo,
  //         completed: todo.completed,
  //         userId: todo.userId,
  //         firstName: user_return.firstName,
  //         lastName: user_return.lastName,
  //       });
  //     }
  //   });
  // };
}
