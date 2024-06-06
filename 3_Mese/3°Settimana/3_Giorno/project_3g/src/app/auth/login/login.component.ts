import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthSerService } from '../auth-ser.service';
import { iUser } from '../../modules/i-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form!:FormGroup

  constructor(private fb: FormBuilder, private accedi: AuthSerService) {}

  ngOnInit(){
    this.form = this.fb.group({
      email : this.fb.control(null,[Validators.required, Validators.email] ),
      password: this.fb.control(null,[Validators.required])
    })
  }

  giako = () => {
    let partial_user:Partial<iUser> = {
      email:this.form.get("email")?.value,
      password:this.form.get("password")?.value
    }
    this.accedi.login(partial_user).subscribe((data) =>{
      console.log(data)
    })
  }



}
