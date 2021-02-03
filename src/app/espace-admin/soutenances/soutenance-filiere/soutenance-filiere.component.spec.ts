import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutenanceFiliereComponent } from './soutenance-filiere.component';

describe('SoutenanceFiliereComponent', () => {
  let component: SoutenanceFiliereComponent;
  let fixture: ComponentFixture<SoutenanceFiliereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutenanceFiliereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutenanceFiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
