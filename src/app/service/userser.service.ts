import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class UserserService {

  constructor(private http: HttpClient) { }
  isadminRight():boolean{
      return false
  }

  //

  isChild():boolean{
    return false
}

  modalbool:boolean=false;
  setModalOpen(modalshowHide){
    this.modalbool=modalshowHide
  }

  getModalop(){
    return this.modalbool
  }


  //search

  search(term: string) {
    return this.http.get('https://api.spotify.com/v1/search?q=' + term + '&type=artist').pipe(
    map(response=>{response})
    )
  }


}
