import { Component, OnInit } from '@angular/core';
import { AppResolverService} from '../../app-resolver.service';
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.scss']
})
export class KitchenComponent implements OnInit {

  constructor(private actr:ActivatedRoute) {

  
   }

  ngOnInit() {
      console.log("Component Kitche Intiated")
  }

}
