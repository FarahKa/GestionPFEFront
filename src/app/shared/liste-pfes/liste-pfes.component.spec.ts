import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePfesComponent } from './liste-pfes.component';

describe('ListePfesComponent', () => {
  let component: ListePfesComponent;
  let fixture: ComponentFixture<ListePfesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePfesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePfesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
