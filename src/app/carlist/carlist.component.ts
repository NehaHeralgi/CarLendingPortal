import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.scss']
})
export class CarlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  popularCars = [
    { name: 'Toyota Camry', amount: 20000, imageUrl: 'assets/Media/list/camry.webp' },
    { name: 'Toyota Fortuner', amount: 25000, imageUrl: 'assets/Media/list/fortuner.webp' },
    { name: 'Toyota Glanza', amount: 30000, imageUrl: 'assets/Media/list/glanza.webp' },
    { name: 'Toyota Innova Crysta', amount: 35000, imageUrl: 'assets/Media/list/innova-crysta.webp' },
    { name: 'Toyota Urban Cruiser', amount: 40000, imageUrl: 'assets/Media/list/urban-cruiser.webp' },
    { name: 'Toyota Vellfire', amount: 45000, imageUrl: 'assets/Media/list/vellfire-exterior.webp' },
  ];


  largeCars  = [
    { name: 'largeCars Toyota Camry', amount: 20000, imageUrl: 'assets/Media/list/camry.webp' },
    { name: 'largeCars Toyota Fortuner', amount: 25000, imageUrl: 'assets/Media/list/fortuner.webp' },
    { name: 'largeCars Toyota Glanza', amount: 30000, imageUrl: 'assets/Media/list/glanza.webp' },
    { name: 'largeCars Toyota Innova Crysta', amount: 35000, imageUrl: 'assets/Media/list/innova-crysta.webp' },
    { name: 'largeCars Toyota Urban Cruiser', amount: 40000, imageUrl: 'assets/Media/list/urban-cruiser.webp' },
    { name: 'largeCars Toyota Vellfire', amount: 45000, imageUrl: 'assets/Media/list/vellfire-exterior.webp' },
  ];

  smallCars  = [
    { name: 'smallCars Toyota Camry', amount: 20000, imageUrl: 'assets/Media/list/camry.webp' },
    { name: 'smallCars Toyota Fortuner', amount: 25000, imageUrl: 'assets/Media/list/fortuner.webp' },
    { name: 'smallCars Toyota Glanza', amount: 30000, imageUrl: 'assets/Media/list/glanza.webp' },
    { name: 'smallCars Toyota Innova Crysta', amount: 35000, imageUrl: 'assets/Media/list/innova-crysta.webp' },
    { name: 'smallCars Toyota Urban Cruiser', amount: 40000, imageUrl: 'assets/Media/list/urban-cruiser.webp' },
    { name: 'smallCars Toyota Vellfire', amount: 45000, imageUrl: 'assets/Media/list/vellfire-exterior.webp' },
  ];

  exclusiveCars  = [
    { name: 'exclusiveCars Toyota Camry', amount: 20000, imageUrl: 'assets/Media/list/camry.webp' },
    { name: 'exclusiveCars Toyota Fortuner', amount: 25000, imageUrl: 'assets/Media/list/fortuner.webp' },
    { name: 'exclusiveCars Toyota Glanza', amount: 30000, imageUrl: 'assets/Media/list/glanza.webp' },
    { name: 'exclusiveCars Toyota Innova Crysta', amount: 35000, imageUrl: 'assets/Media/list/innova-crysta.webp' },
    { name: 'exclusiveCars Toyota Urban Cruiser', amount: 40000, imageUrl: 'assets/Media/list/urban-cruiser.webp' },
    { name: 'exclusiveCars Toyota Vellfire', amount: 45000, imageUrl: 'assets/Media/list/vellfire-exterior.webp' },
  ];


}
