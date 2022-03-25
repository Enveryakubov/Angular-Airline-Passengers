import { Component, OnInit } from '@angular/core';
import { PassengerDashboardService } from '../../passenger-dashboard.service';
import { map, of, switchMap } from 'rxjs';
import { Passenger } from '../../models/passanger.interface';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-passenger-viewer',
  styleUrls: ['./passenger-viewer.component.scss'],
  template: `
    <div class="container">
      <button class="btn btn-link" (click)="goBack()">Go back</button>
      <app-passenger-form
        [detail]="passenger | async"
        (update)="onUpdate($event)"
      ></app-passenger-form>
    </div>
  `,
})
export class PassengerViewerComponent implements OnInit {
  passenger: any = '';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private PassengerService: PassengerDashboardService
  ) {}

  ngOnInit(): void {
    this.passenger = this.route.params.pipe(
      switchMap((data: Params) =>
        this.PassengerService.getPassenger(data['id'])
      )
    );
  }

  onUpdate(passenger: Passenger) {
    this.PassengerService.updatePassenger(passenger).subscribe(
      (result: Passenger) => (this.passenger = of(result))
    );
  }
  goBack() {
    this.router.navigate(['passengers']);
  }
}
