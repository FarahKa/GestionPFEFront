import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPfeDetailsComponent } from './view-pfe-details.component';

describe('ViewPfeDetailsComponent', () => {
  let component: ViewPfeDetailsComponent;
  let fixture: ComponentFixture<ViewPfeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPfeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPfeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
