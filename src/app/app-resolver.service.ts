import { Injectable } from '@angular/core';
import { Resolve ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class AppResolverService implements Resolve<any> {

  constructor(private http:HttpClient) { }

  resolve(route:ActivatedRouteSnapshot,rstate:RouterStateSnapshot):Observable<any>{
    console.log("Logging Collected route Parameter");
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
}
