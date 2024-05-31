import { iCardUser } from './../../modules/icard-user';
import { Component } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { UsersService } from '../../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {

  constructor(
    public users_s_u: UsersService,
    private todos_s_h: TodosService,
  ) {}

array_post_user:iCardUser[] = []

  ngOnInit() {
    this.array_post_user = this.users_s_u.get_user(this.todos_s_h.todos)
    // console.log(this.array_post_user)
  }


  toggleStatus(id:number){
    this.todos_s_h.toogle_todo(id)
  }
}
