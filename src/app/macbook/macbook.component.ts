import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  subscribeForm: FormGroup;
  shippingDate: string;
  loaded: boolean = false;
  submitted: boolean;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.createSubscribeForm();
    this.shippingDate = this.route.snapshot.data.shippingDate.macbook;
    this.submitted = false;

    setTimeout(() => {
      this.loaded = true;
    }, 500)
  }

  createSubscribeForm(): void {
    this.subscribeForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$')]],
    })
  }

  subscribeNow(): void {
    this.submitted = true;

    if (this.subscribeForm.valid) {
      this.subscribeForm.get('email').setValue(null);
      this.submitted = false;
    }
  }

}
