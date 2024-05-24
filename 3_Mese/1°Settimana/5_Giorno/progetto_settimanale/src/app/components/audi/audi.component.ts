import { Component } from '@angular/core';
import { iCar } from '../../models/i-car';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrl: './audi.component.scss'
})
export class AudiComponent {
  array_macchina: iCar[] = [];
  array_audi: iCar[] = [];

  ngOnInit() {
    this.get_car();
  }

  async get_car(): Promise<Array<iCar>> {
    let response = await fetch('../../../assets/db.json');
    let macchina = <Array<iCar>>await response.json();
    this.array_macchina = macchina;
    this.get_audi(this.array_macchina)
    return this.array_macchina;
  }

  get_audi = (array:iCar[] = []) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].brand === "Audi") {
        this.array_audi.push(array[i])
      }
    }
    return this.array_audi
  };
}
