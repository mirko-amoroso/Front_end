import { Component } from '@angular/core';
import { iCar } from '../../models/i-car';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  array_macchina: iCar[] = [];
  array_logo: iCar[] = [];
  array_mischiato: iCar[] = [];

  ngOnInit() {
    this.get_car();
  }

  async get_car(): Promise<Array<iCar>> {
    let response = await fetch('../../../assets/db.json');
    let macchina = <Array<iCar>>await response.json();
    this.array_macchina = macchina;
    this.get_loghi_car(this.array_macchina);
    this.mischia(this.array_macchina);
    return this.array_macchina;
  }

  // get_loghi = (array: iCar[]): string[] => {
  //   array.forEach((car) => {
  //     if (!this.array_logo.includes(car.brandLogo)) {
  //       this.array_logo.push(car.brandLogo);
  //     }
  //   });
  //   return this.array_logo;
  // };

  mischia = (array: Array<iCar>) => {
    for (let i = array.length - 1; i > 0; i--) {
      const n = Math.floor(Math.random() * (i + 1));
      [array[i], array[n]] = [array[n], array[i]];
    }
    this.array_mischiato = array;
    return;
  };

  get_loghi_car = (array: iCar[]): iCar[] => {
    let array_prova: string[] = [];
    array.forEach((car) => {
      if (!array_prova.includes(car.brandLogo)) {
        array_prova.push(car.brandLogo);
        this.array_logo.push(car);
      }
    });
    return this.array_logo;
  };
}
