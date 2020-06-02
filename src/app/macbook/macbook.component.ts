import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { animations } from '../shared/animations/animations';

@Component({
  selector: 'app-macbook',
  templateUrl: './macbook.component.html',
  styleUrls: ['./macbook.component.scss'],
  animations: [
    animations
  ]
})
export class MacbookComponent implements OnInit {

  shippingDate: string;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.shippingDate = this.route.snapshot.data.shippingDate.macbook;

    setTimeout(() => {
      this.loaded = true;
    }, 500)
  }

}
