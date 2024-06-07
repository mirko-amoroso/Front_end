import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { iUser } from '../../modules/i-user';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.scss',
})
export class ProfiloComponent {

  user!:iUser

  constructor(
    private service:AppService
  ) {};

  ngOnInit(){
    this.info_profilo()
  }

  info_profilo = () => {
    this.service.get_utente()?.subscribe((data) =>{
      this.user = data
    })
  }
}
