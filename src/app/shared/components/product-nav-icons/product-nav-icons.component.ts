import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-nav-icons',
  templateUrl: './product-nav-icons.component.html',
  styleUrls: ['./product-nav-icons.component.scss']
})
export class ProductNavIconsComponent implements OnInit {

  // Defines the direction of the product icons.
  // Direction row if no value is specify.
  @Input() direction: string;

  constructor() { }

  ngOnInit() {
    this.direction = this.direction ? this.direction : 'row';
  }

}
