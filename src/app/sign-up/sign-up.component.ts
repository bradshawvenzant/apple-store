import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, PatternValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../shared/model/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../shared/styles/sign-in-up.scss', './sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  user: User;
  error: string;
  submitted: boolean;

  constructor(private router: Router, private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.createSignUpForm();
    this.user = new User();
    this.submitted = false;
    this.error = null;
  }

  createSignUpForm(): void {
    this.signUpForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.pattern(/^[A-Za-z ]+$/)]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&\'*+\\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$')]],
      password: ['', Validators.required]
    })
  }

  signUp(): void {
    this.submitted = true;
    this.error = null;
    this.buildUser();

    if (this.signUpForm.valid) {
      this.userService.register(this.user).subscribe(
        response => {
          this.submitted = false;
          this.router.navigate(['/']);
        }, err => {
          this.error = err;
        }
      );
    }
  }

  buildUser(): void {
    this.user.fullName = this.signUpForm.get('fullName').value;
    this.user.email = this.signUpForm.get('email').value;
    this.user.password = this.signUpForm.get('password').value;
  }

}
