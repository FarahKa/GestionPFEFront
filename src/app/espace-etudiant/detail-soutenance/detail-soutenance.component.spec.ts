import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSoutenanceComponent } from './detail-soutenance.component';

describe('DetailSoutenanceComponent', () => {
  let component: DetailSoutenanceComponent;
  let fixture: ComponentFixture<DetailSoutenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSoutenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSoutenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
