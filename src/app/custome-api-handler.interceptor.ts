import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError,retry, finalize } from 'rxjs/operators';
@Injectable()
export class CustomeApiHandlerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const hardCodeToken="sjwuewjsk1212nsjdu234930";
    const reqwithAuth=request.clone({
      setHeaders:{
        Authorization:`Bearer ${hardCodeToken}`
      }
    })
    // return undefined;
     return next.handle(reqwithAuth)
     .pipe(
       retry(2),
       catchError((error:HttpErrorResponse)=>{
         console.log("HTTP ERROR",reqwithAuth);
         return throwError(error)
       }),

       finalize(()=>{
         const profiligMessage=`${reqwithAuth.method}*${reqwithAuth.urlWithParams}`;
         console.log("Profiling Message",profiligMessage)
       })
     )
     
     ;
  }
}
