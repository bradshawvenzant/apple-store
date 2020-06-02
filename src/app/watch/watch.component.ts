import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-watch',
  templateUrl: './watch.component.html',
  styleUrls: ['./watch.component.scss'],
  animations:[    
  ]
})
export class WatchComponent implements OnInit {

  shippingDate: string;
  showImage: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.shippingDate = this.route.snapshot.data.shippingDate.macbook;
    this.showImage = true;
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

}
