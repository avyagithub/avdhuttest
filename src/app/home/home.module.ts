import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { KitchenComponent } from './kitchen/kitchen.component';

@NgModule({
  declarations: [HomeComponent, KitchenComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule {

  
  constructor(){
    console.log("Employee routing module")
  }

  //inpunt controle 

 

 }
