import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationPFEComponent } from './validation-pfe.component';

describe('ValidationPFEComponent', () => {
  let component: ValidationPFEComponent;
  let fixture: ComponentFixture<ValidationPFEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationPFEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationPFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
