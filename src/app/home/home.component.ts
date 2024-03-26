import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HomeComponent,
  ],
  template: `
    <p>
      home works!
    </p>
  `,
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
