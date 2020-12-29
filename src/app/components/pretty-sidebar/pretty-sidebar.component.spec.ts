import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrettySidebarComponent } from './pretty-sidebar.component';

describe('PrettySidebarComponent', () => {
  let component: PrettySidebarComponent;
  let fixture: ComponentFixture<PrettySidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrettySidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrettySidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
