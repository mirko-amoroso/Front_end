import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  isLoggedIn:boolean = false

  constructor(private service:AuthService){}

  ngOnInit(){

    this.service.isLoggedIn$
    .subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn )

  }

  logout(){
    this.service.logout()
  }
}
