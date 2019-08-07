import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EupCancelButtonComponent } from './eup-cancel-button.component';

describe('EupCancelButtonComponent', () => {
  let component: EupCancelButtonComponent;
  let fixture: ComponentFixture<EupCancelButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EupCancelButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EupCancelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
