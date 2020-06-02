import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.scss'],
  animations: [
  ]
})
export class IphoneComponent implements OnInit {

  shippingDate: string;
  rangeValue: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.shippingDate = this.route.snapshot.data.shippingDate.macbook;
    this.rangeValue = 0;
  }

  updateValue(): void {
    this.rangeValue = this.rangeValue > 50 ? 100 : 0;
  }

  updateScrollValue(newValue: number): void {
    this.rangeValue = this.rangeValue !== newValue ? newValue : this.rangeValue;
  }

}
