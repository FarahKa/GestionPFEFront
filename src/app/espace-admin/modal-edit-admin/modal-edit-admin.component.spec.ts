import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditAdminComponent} from './modal-edit-admin.component';

describe('ModalEditAdminComponent', () => {
  let component: ModalEditAdminComponent;
  let fixture: ComponentFixture<ModalEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditAdminComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
