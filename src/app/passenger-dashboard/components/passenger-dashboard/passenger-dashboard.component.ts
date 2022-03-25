import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassengerDashboardService } from '../../passenger-dashboard.service';

@Component({
  selector: 'app-passenger-dashboard',
  styleUrls: ['./passenger-dashboard.component.scss'],
  template: `
    <div class="container pt-5">
      <h1>Airline Passengers</h1>
      <app-passenger-count [items]="data"></app-passenger-count>
      <app-passenger-detail
        *ngFor="let person of data"
        [person]="person"
        (onRemove)="handleRemove($event)"
        (onEdit)="handleEdit($event)"
        (view)="handleView($event)"
      ></app-passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {
  data: any = [];
  constructor(
    private router: Router,
    private PassengerService: PassengerDashboardService
  ) {}

  handleRemove(evt: number) {
    this.data = this.data.filter((d: any) => d.id !== evt);
    this.PassengerService.removePassenger(evt).subscribe(
      (this.data = this.data.filter((d: any) => d.id !== evt))
    );
  }
  handleEdit(evt: any) {
    if (evt) {
      this.PassengerService.updatePassenger(evt).subscribe((passen) => {
        this.data = this.data.map((person: any) => {
          if (person.id === evt.id) {
            person = { ...person, ...evt };
          }
          return person;
        });
      });
    }
  }
  handleView(id: number) {
    this.router.navigate(['passengers', id]);
  }

  ngOnInit(): void {
    this.PassengerService.getPassengers().subscribe(
      (data) => (this.data = data)
    );
  }
}
