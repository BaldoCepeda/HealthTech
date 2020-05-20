import { Platform, AlertController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, CanActivate } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

const TOKEN_KEY = 'jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private jwtHelper: JwtHelperService, private router: Router, private http: HttpClient, private storage: Storage,
              private plt: Platform, private alertController: AlertController) {
  }

  canActivate() {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

  logout() {
    localStorage.clear();
    this.router.navigate([`login`]);
  }

  showAlert(msg) {
    let alert = this.alertController.create({
      message: msg,
      header: 'Error',
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }

  showAlertCtm(hdr, msg) {
    let alert = this.alertController.create({
      message: msg,
      header: hdr,
      buttons: ['OK']
    });
    alert.then(alert => alert.present());
  }
}
