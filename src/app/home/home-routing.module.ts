import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'
import { KitchenComponent} from '../home/kitchen/kitchen.component'
import { AppResolverService } from '../app-resolver.service'
import { ChildActivateGuard } from './child-activate.guard'

const routes: Routes = [
  { path: "",
   component: HomeComponent,
    canActivateChild:[ChildActivateGuard],
   children:[
     {
       path:'kitchen',
       component:KitchenComponent,

     }
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
