import { TestBed } from '@angular/core/testing';

import { PassengerDashboardService } from './passenger-dashboard.service';

describe('PassengerDashboardService', () => {
  let service: PassengerDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PassengerDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
