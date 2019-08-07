import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EupDialogContentComponent } from './eup-dialog-content.component';

describe('EupDialogContentComponent', () => {
  let component: EupDialogContentComponent;
  let fixture: ComponentFixture<EupDialogContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EupDialogContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EupDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
