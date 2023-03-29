import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { CityComponent } from './components/city/city.component';
import { DataComponent } from './components/data/data.component';



@NgModule({
  declarations: [
    HomeComponent,
    CityComponent,
    DataComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
