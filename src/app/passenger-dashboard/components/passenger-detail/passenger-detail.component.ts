import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-passenger-detail',
  styleUrls: ['./passenger-detail.component.scss'],
  template: ` <div>
    <span
      *ngIf="!editing"
      class="status"
      [style.backgroundColor]="person.checkedIn ? 'greenyellow' : 'orangered'"
    ></span>

    <div *ngIf="!editing" class="fw-bold badge bg-primary text-wrap">
      {{ person.name }}
    </div>
    <div *ngIf="editing" class="my-2">
      <input
        class="form-control"
        type="text"
        [value]="person.name"
        (input)="onNameChange(name.value)"
        #name
      />
    </div>
    <div class="date">
      Check in date:
      {{
        person.checkInDate
          ? (person.checkInDate | date | uppercase)
          : ('Not checked in' | uppercase)
      }}
    </div>
    <button (click)="toggleEdit()" class="btn btn-secondary w-100 mt-3">
      {{ editing ? 'Done' : 'Edit' }}
    </button>
    <button (click)="removePerson()" class="btn btn-warning w-100 my-3">
      Remove
    </button>
    <button class="btn btn-info w-100 mb-3" (click)="goToPassenger()">
      View Passenger
    </button>
  </div>`,
})
export class PassengerDetailComponent implements OnInit, OnChanges {
  @Input() person: any;
  @Output() onRemove: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() view: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  constructor() {}

  onNameChange(value: string) {
    if (value) {
      this.person.name = value;
      this.onEdit.emit(value);
    }
  }

  toggleEdit() {
    if (this.editing) {
      this.onEdit.emit(this.person);
    }
    this.editing = !this.editing;
  }

  removePerson() {
    this.onRemove.emit(this.person.id);
  }

  ngOnChanges(changes: any) {
    if (changes.person) {
      this.person = { ...changes.person.currentValue };
    }
  }

  goToPassenger() {
    this.view.emit(this.person.id);
  }
  ngOnInit(): void {}
}
