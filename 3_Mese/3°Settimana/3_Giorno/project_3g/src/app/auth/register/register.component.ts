import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthSerService } from '../auth-ser.service';
import { iUser } from '../../modules/i-user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

form!: FormGroup

newUser:Partial<iUser> = {}

constructor(
  private fb:FormBuilder,
  private registra : AuthSerService,
) {}

ngOnInit() {
  this.form = this.fb.group({
    email : this.fb.control(null,[Validators.required, Validators.email] ),
    password: this.fb.control(null,[Validators.required])
  })
}

// register(){
//   this.registra.register(this.newUser).subscribe()
// }

giack = () => {
  let partial_user:Partial<iUser> = {
    email:this.form.get("email")?.value,
    password:this.form.get("password")?.value
  }
  console.log(partial_user)
  this.registra.register(partial_user).subscribe((data) =>{
    console.log(data)
  })
}
}
