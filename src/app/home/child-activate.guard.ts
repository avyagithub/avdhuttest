import { Injectable } from '@angular/core';
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {UserserService } from '../service/userser.service'
@Injectable({
  providedIn: 'root'
})
export class ChildActivateGuard implements CanActivateChild {
  constructor(private userserv:UserserService){}
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.userserv.isChild()){
     return true
   }else{
     alert("You dont have permission to view kitchen")
   }
  }
  
}
