import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated

})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {
  }
  ngOnInit() {


  }


  title = 'myapp';
}
 