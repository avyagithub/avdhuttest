import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent} from './profile.component'
import { DeactivateGuard } from 'src/app/admin/deactivate.guard';


const routes: Routes = [{
  path:'',
  component:ProfileComponent,
  canDeactivate:[DeactivateGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
