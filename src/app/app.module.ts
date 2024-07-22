import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FindYourCarComponent } from './find-your-car/find-your-car.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'primeng/carousel';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { FooterComponent } from './footer/footer.component';
import { PanelModule } from 'primeng/panel';
import { CarlistComponent } from './carlist/carlist.component';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    FindYourCarComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    CarlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
    FormsModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    RadioButtonModule,
    CarouselModule,
    MenubarModule,
    SidebarModule,
    PanelModule,
    TabViewModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
