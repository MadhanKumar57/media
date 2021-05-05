import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JsonServiceService } from '../shared/json-service.service';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userid: any;
  public username: any;
  public name: any;
  length = 0;
  loginform !: FormGroup;
  public userlist: any = [];
  
  constructor(public toastr: ToastrService, public login: FormBuilder, private router: Router, private json: JsonServiceService,) { }
  
  ngOnInit(): void {
    this.userid = localStorage.getItem('userId');
    this.username = localStorage.getItem('userName');
    this.loginform = this.login.group({
      userID: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
  get f() { return this.loginform.controls; }

  submit() {
    if (this.loginform.invalid) {
      this.toastr.error('Enter UserId and Password')
    }
    this.json.loginPage().subscribe((result) => {
      if (result) {
        this.userlist = result;
        this.length = result.length

        let user = this.userlist.filter((user: any) => user.userid == this.loginform.value.userID && user.password == this.loginform.value.password)

        console.log('userjson', user);

        if (user.find((x: any) => x.isActive == 1)) {
          localStorage.setItem('userId', user[0].userid);
          localStorage.setItem('userName', user[0].username);
          this.name = localStorage.setItem('userName', user[0].username);
          this.toastr.success('Welcome', 'Login Successfully')
          window.location.href = '/Home-Page';
        }
        else if (user.find((x: any) => x.isActive == 0)) {
          this.toastr.error('Your Account is deactivated,Please Activate your account')
        }
        else {
          this.toastr.error('Enter valid userid and password')
        }
      }
      else {
      }

    }, (err) => {
      console.log(err);
    });
  }

  logout() {
    localStorage.clear();
    this.toastr.success('Logout Successfully')
    window.location.href = '/Home-Page';

  }
}
