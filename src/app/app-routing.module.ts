import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: '../app/login/login.module#LoginModule'
  },
  {
    path: "home",
    loadChildren: '../app/home/home.module#HomeModule'
  },
  {
    path: "emplist",
    loadChildren: '../app/employeelist/employeelist.module#EmployeelistModule'
  },
  {
    path: "admin",
    loadChildren: '../app/admin/admin.module#AdminModule'
  }
, {
  path: "profile",
  loadChildren: '../app/employeelist/profile/profile.module#ProfileModule'
}

  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  constructor(){
    console.log("App routing module")
  }
}
