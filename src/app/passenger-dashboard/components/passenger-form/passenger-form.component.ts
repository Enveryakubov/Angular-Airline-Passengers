import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Baggage } from '../../models/baggage.interface';
import { Passenger } from '../../models/passanger.interface';

@Component({
  selector: 'app-passenger-form',
  styleUrls: ['./passenger-form.component.scss'],
  template: `
    <form
      #form="ngForm"
      novalidate
      (ngSubmit)="handleSubmit(form.value, form.valid)"
      class="bg-light container w50 px-5"
    >
      <div>
        <br />
        <p class="fs-3">Passenger name:</p>
        <input
          type="text"
          name="name"
          class="form-control"
          required
          #name="ngModel"
          [ngModel]="detail?.name"
          [ngClass]="name.errors?.['required'] && name.dirty ? 'form-control is-invalid' : ''"
        />
      </div>
      <div *ngIf="name.errors" class="error">This field is required</div>

      <div>
        <br />
        <p class="fs-3">Passenger ID:</p>
        <input
          class="form-control"
          required
          type="number"
          name="id"
          #id="ngModel"
          [ngModel]="detail?.id"
          [ngClass]="id.errors && id.dirty ? 'form-control is-invalid' : ''"
        />
        <div *ngIf="id.errors" class="error">This field is required</div>
      </div>
      <div class="my-4">
        <p class="fs-3">Checked Status</p>
        <label>
          <input
            type="checkbox"
            name="checkedIn"
            [ngModel]="detail?.checkedIn"
            (ngModelChange)="toggleCheckIn($event)"
          />
        </label>
      </div>
      <div *ngIf="form.value.checkedIn" class="my-4">
        <p class="fs-3">Check in date:</p>
        <input
          type="number"
          class="form-control"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        />
      </div>
      <div>
        <p class="fs-3">Luggage:</p>
        <select name="baggage" [ngModel]="detail?.baggage" class="form-control">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
          >
            {{ item.value }}
          </option>
        </select>
      </div>
      <button
        type="submit"
        class="btn btn-success my-4"
        [disabled]="form.invalid"
      >
        Update a passenger
      </button>
    </form>
  `,
})
export class PassengerFormComponent implements OnInit {
  @Input() detail!: Passenger | null;
  @Output() update: EventEmitter<Passenger> = new EventEmitter<Passenger>();

  baggage: Baggage[] = [
    {
      key: 'none',
      value: 'No baggage',
    },
    {
      key: 'hand-only',
      value: 'Hand baggage',
    },
    {
      key: 'hold-only',
      value: 'Hold baggage',
    },
    {
      key: 'hand-hold',
      value: 'Hand and hold baggage',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail!.checkInDate = Date.now();
    }
  }
  handleSubmit(values: Passenger, valid: boolean | null): void {
    valid && this.update?.emit(values);
  }
}
