import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../shared/styles/sign-in-up.scss']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;
  error: string;
  submitted: boolean;

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createSignInForm();
    this.submitted = false;
    this.error = null;
  }

  createSignInForm(): void {
    this.signInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signIn(): void {
    this.submitted = true;
    this.error = null;

    if (this.signInForm.valid) {
      this.userService.authenticate(this.signInForm.get('email').value, this.signInForm.get('password').value).subscribe(
        response => {
          this.submitted = false;
          this.router.navigate(['/welcome']);
        }, error => {
          this.error = error;
        }
      );
    }
  }

}
