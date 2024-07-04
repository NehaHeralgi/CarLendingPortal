import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-your-car',
  templateUrl: './find-your-car.component.html',
  styleUrls: ['./find-your-car.component.scss']
})
export class FindYourCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selectedCar: string | undefined;
  selectedOption: string | undefined;
  selectedBudget: string | undefined;
  selectedVehicle: string | undefined;

  budgetOptions = [
    { label: '$20,000', value: '20' },
    { label: '$30,000', value: '30' },
    { label: '$40,000', value: '40' }
  ];

  vehicleOptions = [
    { label: 'x', value: 'html' },
    { label: 'y', value: 'css' },
    { label: 'z', value: 'js' }
  ];

  selectCar(type: string): void {
    this.selectedCar = type;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
