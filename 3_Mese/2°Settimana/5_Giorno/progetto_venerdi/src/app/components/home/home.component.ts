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

  toggleStatus_home(id:number){
    this.todos_s_h.toogle_todo(id)
    this.array_finale = this.todos_s_h.get_post(this.users_arr);
  }

}
