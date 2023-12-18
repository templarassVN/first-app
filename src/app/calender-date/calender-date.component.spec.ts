import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderDateComponent } from './calender-date.component';

describe('CalenderDateComponent', () => {
  let component: CalenderDateComponent;
  let fixture: ComponentFixture<CalenderDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalenderDateComponent]
    });
    fixture = TestBed.createComponent(CalenderDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
