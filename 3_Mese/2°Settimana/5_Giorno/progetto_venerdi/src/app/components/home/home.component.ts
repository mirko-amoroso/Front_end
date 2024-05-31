import { Component } from '@angular/core';
import { TodosService } from '../../service/todos.service';
import { iPostAutore } from '../../modules/post-autore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor( private todos_s_h: TodosService) {}

  array_finale:iPostAutore[] = []


  ngOnInit() {
    this.array_finale = this.todos_s_h.get_post()
  }
}
