import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import {APP_BASE_HREF} from '@angular/common'; 

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormsComponent } from './forms/forms.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { BackendApiService } from './backend-api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,AppRoutingModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, FormsComponent, EmployeeListComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BackendApiService, {provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppModule { }
