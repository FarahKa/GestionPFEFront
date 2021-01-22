import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPfeComponent } from './detail-pfe.component';

describe('DetailPfeComponent', () => {
  let component: DetailPfeComponent;
  let fixture: ComponentFixture<DetailPfeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPfeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
