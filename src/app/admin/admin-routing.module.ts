import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ActivateGuard } from './activate.guard'


const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    canActivate:[ActivateGuard]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
