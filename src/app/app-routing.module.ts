import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindYourCarComponent } from './find-your-car/find-your-car.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'FindYourCar', component: FindYourCarComponent },
  { path: 'Navbar', component: NavbarComponent },
  { path: '', component: HomeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
