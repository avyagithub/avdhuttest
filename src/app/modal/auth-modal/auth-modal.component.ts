import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  openDialog(){
    $(document).ready(function() {
    console.log("This is modal")
    $("#myModal").modal()
    })
  }

}
