import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  styleUrls: ['./not-found.component.scss'],
  template: `
    <div class="main">
      <h2>Page does not exist!</h2>
      <p>To get back to the main page click <a routerLink="/">here!</a></p>
    </div>
  `,
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
