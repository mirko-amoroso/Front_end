import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { iUser } from '../../modules/i-user';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrl: './utenti.component.scss'
})
export class UtentiComponent {
  constructor(private service: AppService) {}

  array_user: iUser[] = [];

ngOnInit(){
  this.get_utenti()
}

  get_utenti = () => {
    this.service.get_all_utenti().subscribe((data) => {
      console.log(data)
      this.array_user = data
    });
  };
}
