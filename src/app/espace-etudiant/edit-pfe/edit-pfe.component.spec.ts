import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPfeComponent } from './edit-pfe.component';

describe('EditPfeComponent', () => {
  let component: EditPfeComponent;
  let fixture: ComponentFixture<EditPfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
