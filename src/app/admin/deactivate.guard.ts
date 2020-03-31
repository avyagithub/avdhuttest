import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from '../employeelist/profile/profile.component';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuard implements CanDeactivate<ProfileComponent> {
  canDeactivate(
    component: ProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    return window.confirm("Are you sure want to Leave")
  }
  
}
