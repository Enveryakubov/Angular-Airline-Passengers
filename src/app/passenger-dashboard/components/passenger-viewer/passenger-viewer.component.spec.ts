import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerViewerComponent } from './passenger-viewer.component';

describe('PassengerViewerComponent', () => {
  let component: PassengerViewerComponent;
  let fixture: ComponentFixture<PassengerViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerViewerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengerViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
