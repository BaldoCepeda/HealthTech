import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  encodeData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  data = '';
  errors: any;


  scannedProduct = '';

  url = 'https://api.upcdatabase.org/product/';
  apiKey = '91BF2B4BE9C45D67600FE3B81C42AE10';

  constructor(private authService: AuthService, private storage: Storage,
    private toastController: ToastController, private barcodeScanner: BarcodeScanner,
    private http: HTTP, private router: Router) {
    this.encodeData = "https://www.FreakyJolly.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  ngOnInit() {
  }

  async getData(BarCode: string){
    console.log(BarCode);
    this.http.get(this.url + BarCode + "?apikey=" + this.apiKey, {}, {})
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      var product = JSON.parse(data.data);
      this.scannedProduct = product.description;

    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }

  async scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
        this.getData(this.scannedData["text"]);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  encodedText() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodeData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }

  logout() {
    this.authService.logout();
  }

  clearToken() {
    // ONLY FOR TESTING!
    this.storage.remove('access_token');
    this.storage.get('ubicacion').then(val => {
      console.log(val);
    });
    let toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }
  seeAditives(){
    this.router.navigate(['/unique-additives']);
  }

}
