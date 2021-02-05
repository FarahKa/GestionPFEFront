import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePfeComponent } from './create-pfe.component';

describe('CreatePfeComponent', () => {
  let component: CreatePfeComponent;
  let fixture: ComponentFixture<CreatePfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
