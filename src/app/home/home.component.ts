import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  inpuName=new FormControl("dsdsds")
  ngOnInit() {

    this.inpuName.valueChanges.subscribe(data=>{
      console.log("Value Change--",data)
    })

  }

}
