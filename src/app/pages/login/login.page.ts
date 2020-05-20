import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  invalidLogin: boolean;

  uri = `${environment.url}api/home`;

  constructor(private router: Router, private http: HttpClient, private jwtHelper: JwtHelperService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    const credentials = JSON.stringify(form.value);
    console.log(credentials);
    this.http.post(`${environment.url}api/auth/login`, credentials, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).subscribe(response => {
      const token = (response as any).token;
      const UserIdentifier = (response as any).userId;
      localStorage.setItem('jwt', token);
      localStorage.setItem('UserIdentifier', UserIdentifier);
      this.invalidLogin = false;
      const Url = ``;
      this.router.navigate([Url]);
      this.authService.showAlertCtm('Hola!', 'Que bueno que estás de regreso!');
    }, err => {
      console.log(err);
      this.invalidLogin = true;
    });
  }

  register() {
    const url = 'register';
    this.router.navigate([url]);
  }
}
