import { async, TestBed } from '@angular/core/testing';
import { EmployeeListComponent } from './employee-list.component';
import { BackendApiService } from '../backend-api.service';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EmployeeListComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        BackendApiService
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(EmployeeListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
