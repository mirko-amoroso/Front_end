import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  contieni_dati = {}

  generi:string[] = ['Uomo','Donna','Transformer']

  form!:FormGroup

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.form = this.fb.group({
      nome: this.fb.control(null),
      cognome: this.fb.control(null),
      password: this.fb.control(null),
      conferma_password: this.fb.control(null),
      genere: this.fb.control(null),
      immagine_profilo: this.fb.control(null),
      biografia: this.fb.control(null),
      username: this.fb.control(null)
    })
  }



  invia_dati = () => {
    console.log(this.form)
    this.contieni_dati = {
      nome:this.form.get("nome")?.value

    }
    console.log(this.contieni_dati);
  }
}
