import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { Route, Router, RouterModule } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  loginForm: any;
  accessTokenObj: any;
  token: any;

  constructor(private formBuilder: FormBuilder, private router: Router,
    private dataservice: DataserviceService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],

    });


  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {


    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const data = {
      "email": this.loginForm.value.Email,
      "password": this.loginForm.value.Password,
    };

    this.dataservice.create(data)
      .subscribe(
        response => {

          this.token = response.headers.get('x-access-token')
          localStorage.setItem('x-access-token', this.token);
          //console.log(response);
          this.submitted = true;
          this.router.navigateByUrl('/home')

        },
        error => {
          console.log(error);

        });
  }





}
