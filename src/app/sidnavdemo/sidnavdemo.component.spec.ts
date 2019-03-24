import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidnavdemoComponent } from './sidnavdemo.component';

describe('SidnavdemoComponent', () => {
  let component: SidnavdemoComponent;
  let fixture: ComponentFixture<SidnavdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidnavdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidnavdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
