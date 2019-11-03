import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { FormsComponent } from './forms.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from "@angular/forms";

describe('FormsComponent', () => {
  let component: FormsComponent;
  let fixture: ComponentFixture<FormsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FormsComponent
      ],
      imports: [
        ReactiveFormsModule
      ],
    }).compileComponents();
    // create component and test fixture
    fixture = TestBed.createComponent(FormsComponent);

    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  }));

  it('should create the forms component', async(() => {
    const fixture = TestBed.createComponent(FormsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
});

it('email field validity', () => {
    let errors = {};
    let email = component.registerForm.controls['email'];
    expect(email.valid).toBeFalsy();

    // Email field is required
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    email.setValue("test");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeTruthy();

    // Set email to something correct
    email.setValue("test@example.com");
    errors = email.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['email']).toBeFalsy();
});

it('password field validity', () => {
    let errors = {};
    let password = component.registerForm.controls['password'];

    // Email field is required
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set email to something
    password.setValue("123456");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeTruthy();

    // Set email to something correct
    password.setValue("123456789");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['minlength']).toBeFalsy();
});

// it('submitting a form with valid data is successful', () => {
//     // expect(component.registerForm.valid).toBeFalsy();
//     component.registerForm.controls['userName'].setValue("testUser");
//     component.registerForm.controls['email'].setValue("test@test.com");
//     component.registerForm.controls['password'].setValue("123456789");
//     expect(component.registerForm.valid).toBeTruthy();

//     // let user: User;
//     // Subscribe to the Observable and store the user in a local variable.
//     // component.loggedIn.subscribe((value) => user = value);

//     // Trigger the login function
//     // component.login();

//     // Now we can check to make sure the emitted value is correct
//     // expect(user.email).toBe("test@test.com");
//     // expect(user.password).toBe("123456789");
// });

});
