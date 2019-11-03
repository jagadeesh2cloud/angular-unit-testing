import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { first } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";
import { BackendApiService } from '../backend-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  data: any;
  title = "welcome to Angular Session";
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private api: BackendApiService
  ) {}

  ngOnInit() {
    this.List();
  }

  List() {
    this.api
      .GetData("../assets/Data.json")
      .pipe(first())
      .subscribe(result => {
        console.log(result);
        this.data = result;
      });
  }


}