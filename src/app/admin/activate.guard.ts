import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserserService} from '../service/userser.service'
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(
    private userservice:UserserService,
    private router:Router    ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.userservice.isadminRight()){
        console.log("Yes you access to dashboard")
        return true;
      }else{
          // alert('I am Called From jQuery');
          // this.userservice.setModalOpen(true)
          console.log("You are not authorized person")
          return false
        // this.router.navigate(['/home'])
      }

  
  }
  
}
