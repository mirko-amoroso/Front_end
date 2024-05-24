import { Component } from '@angular/core';
import { iCar } from '../../models/i-car';

@Component({
  selector: 'app-ford',
  templateUrl: './ford.component.html',
  styleUrl: './ford.component.scss'
})
export class FordComponent {
  array_macchina: iCar[] = [];
  array_ford: iCar[] = [];

  ngOnInit() {
    this.get_car();
  }

  async get_car(): Promise<Array<iCar>> {
    let response = await fetch('../../../assets/db.json');
    let macchina = <Array<iCar>>await response.json();
    this.array_macchina = macchina;
    this.get_ford(this.array_macchina)
    return this.array_macchina;
  }

  get_ford = (array:iCar[] = []) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].brand === "Ford") {
        this.array_ford.push(array[i])
      }
    }
    return this.array_ford
  };
}
