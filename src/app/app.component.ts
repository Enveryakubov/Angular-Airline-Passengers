import { Component } from '@angular/core';

interface Link {
  link: string;
  text: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  nav: Link[] = [
    {
      link: '/',
      text: 'Home',
      exact: true,
    },
    {
      link: 'passengers',
      text: 'Passengers',
      exact: true,
    },
    {
      link: '**',
      text: '404 Page',
      exact: false,
    },
  ];
}
