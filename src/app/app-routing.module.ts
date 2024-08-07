import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindYourCarComponent } from './find-your-car/find-your-car.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'FindYourCar', component: FindYourCarComponent },
  { path: 'Navbar', component: NavbarComponent },
  { path:'footer',component:FooterComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
