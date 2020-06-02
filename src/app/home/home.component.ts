import { Component, OnInit  } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideInTop', [
      transition('void => *', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate('0.6s')
      ])
    ]),
    trigger('slideInBottom', [
      transition('void => *', [
        style({ transform: 'translateY(200px)', opacity: 0 }),
        animate('0.6s')
      ])
    ]),
    trigger('zoomIn', [
      transition('void => *', [
        style({transform: 'scale(1.1)'}),
        animate('0.6s')
      ])
    ])
  ]
})
export class HomeComponent {

  constructor() { }

}
