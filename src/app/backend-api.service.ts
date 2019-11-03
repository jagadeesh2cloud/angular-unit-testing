import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subscription } from "rxjs";

@Injectable()
export class BackendApiService {

  constructor(private http: HttpClient) {}
  GetData(url): Observable<any> {
    return this.http.get(url);
  }

}