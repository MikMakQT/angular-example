import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackComponent } from './feedback.component';
import { Router } from '@angular/router';
//import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  let router: Router;
  let routerSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackComponent, BrowserAnimationsModule],
      providers: [
        {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy('navigate')
          }
        }
      ]
      /*schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]*/
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    routerSpy = TestBed.inject(Router).navigate as jasmine.Spy;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Tests done in class
  it('cancel-button should navigate to home page', () => {
    component.cancel();
    expect(routerSpy).toHaveBeenCalledWith(['home']);
  });

  it('should mark phone as invalid if it has less than 10 characters', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('12345');
    expect(ctrl?.hasError('minlength')).toBeTrue();
  });

  it('should mark phone as invalid if it has more than 10 characters', () => {
    const ctrl = component.fbForm.get('phone');
    ctrl?.setValue('1234567890123');
    expect(ctrl?.hasError('maxlength')).toBeTrue();
  });

  it('should mark email as invalid if it is not a valid email address', () => {
    const ctrl = component.fbForm.get('email');
    ctrl?.setValue('invalid-email');
    expect(ctrl?.hasError('email')).toBeTrue();
  });

});
