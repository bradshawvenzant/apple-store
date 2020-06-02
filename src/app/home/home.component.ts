import { Component } from '@angular/core';
import { animations } from '../shared/animations/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    animations
  ]
})
export class HomeComponent {

  constructor() { }

}
