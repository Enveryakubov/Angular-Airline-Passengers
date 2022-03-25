import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-count',
  styleUrls: ['./passenger-count.component.scss'],
  template: `
    <div class="my-5">
      <h2>Total Number of Passengers: {{ this.items.length }}</h2>
      <div>Total Number of Checked in passenger: {{ checkedInCount() }}</div>
      <div>Missing: {{ this.items.length - checkedInCount() }} passengers.</div>
    </div>
  `,
})
export class PassengerCountComponent implements OnInit {
  @Input()
  items: any;
  constructor() {}

  ngOnInit(): void {}

  checkedInCount() {
    return this.items?.filter((p: any) => p.checkedIn).length;
  }
}
