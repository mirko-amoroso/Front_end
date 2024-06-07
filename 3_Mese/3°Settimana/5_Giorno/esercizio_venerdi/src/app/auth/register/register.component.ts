import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { iUser } from '../../modules/i-user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  form!: FormGroup;

  newUser: Partial<iUser> = {};

  constructor(private fb: FormBuilder, private registra: AuthService) {}

  ngOnInit() {
    this.form = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required]),
      nome: this.fb.control(null, [Validators.required]),
      cognome: this.fb.control(null, [Validators.required]),
      eta: this.fb.control(null, [Validators.required]),
    });
  }

  giack = () => {
    let partial_user: Partial<iUser> = {
      email: this.form.get('email')?.value,
      password: this.form.get('password')?.value,
      nome: this.form.get('nome')?.value,
      cognome: this.form.get('cognome')?.value,
      eta: this.form.get('eta')?.value,
    };
    console.log(partial_user);
    this.registra.register(partial_user).subscribe((data: any) => {
      console.log(data);
    });
  };
}
