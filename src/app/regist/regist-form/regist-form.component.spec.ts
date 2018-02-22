import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistFormComponent } from './regist-form.component';

describe('RegistFormComponent', () => {
  let component: RegistFormComponent;
  let fixture: ComponentFixture<RegistFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
