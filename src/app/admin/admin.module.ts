import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
// import { AuthModalComponent } from '../modal/auth-modal/auth-modal.component'
@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  providers:[]

})
export class AdminModule { }
