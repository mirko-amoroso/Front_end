import { Component } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { iPostAutore } from '../../modules/post-autore';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrl: './completed.component.scss'
})
export class CompletedComponent {

  constructor(
    private todos_s_h: TodosService,
    private users_s_h: UsersService
  ) {}

  todos_arr = this.todos_s_h.todos;
  users_arr = this.users_s_h.users;

  array_completed: iPostAutore[] = [];


  ngOnInit() {
    this.array_completed = this.todos_s_h.get_copleted(this.users_arr);
  }

}
