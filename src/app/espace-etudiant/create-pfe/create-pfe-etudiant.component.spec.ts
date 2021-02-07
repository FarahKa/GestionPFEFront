import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePfeEtudiantComponent } from './create-pfe-etudiant.component';

describe('CreatePfeComponent', () => {
  let component: CreatePfeEtudiantComponent;
  let fixture: ComponentFixture<CreatePfeEtudiantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePfeEtudiantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePfeEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
