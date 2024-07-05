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
  images: {url: string, name: string}[] = [
    {url: 'assets/images/car1.jpg', name: 'Car 1'},
    {url: 'assets/images/car2.jpg', name: 'Car 2'},
    {url: 'assets/images/car3.jpg', name: 'Car 3'}
  ];

  displayCarInfo(index: number) {
    alert(`Displaying information for ${this.images[index].name}`);
    // You can replace the alert with code to display more detailed information
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
    { label: 'x', value: 'x' },
    { label: 'y', value: 'y' },
    { label: 'z', value: 'z' }
  ];

  selectCar(type: string): void {
    this.selectedCar = type;
  }

  selectOption(option: string): void {
    this.selectedOption = option;
  }
}
