import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { httpintercpetorproviders } from '../intinter'
import { UserserService} from '../service/userser.service';
import { ActivateGuard } from '../admin/activate.guard'
import { DeactivateGuard} from '../admin/deactivate.guard' 
import { AdminModule } from '../admin/admin.module'
import { ReactiveFormsModule } from '@angular/forms';

// import { AuthModalComponent } from '../modal/auth-modal/auth-modal.component'

@NgModule({
  declarations: [],
  imports: [
    AdminModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[httpintercpetorproviders,UserserService,ActivateGuard,DeactivateGuard]
})
export class SharedModule { } 
