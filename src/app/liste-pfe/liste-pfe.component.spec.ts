import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePFEComponent } from './liste-pfe.component';

describe('ListePFEComponent', () => {
  let component: ListePFEComponent;
  let fixture: ComponentFixture<ListePFEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePFEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePFEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
