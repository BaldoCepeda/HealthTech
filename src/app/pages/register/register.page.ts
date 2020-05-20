import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  error = '';
  form: FormGroup;
  invalidRegister = false;
  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(6)]],
      nombre: ['', [Validators.required]],
      rol: ['', [Validators.required]]
    });
  }

  register() {
    const token = localStorage.getItem('jwt');
    if (this.form.valid) {
      this.http.post(`${environment.url}api/usuarios`, this.form.value, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
          'Content-Type': 'application/json'
        })
      }).subscribe((response: any) => {
        console.log(response);
        const Url = `login`;
        this.authService.showAlertCtm('Exito!', `El usuario ${response.nombre} se ha creado correctamente`);
        this.router.navigate([Url]);
      }, (err: any) => {
        console.log(err);
        this.invalidRegister = true;
        const errors = err.error;
      });
    }
  }

}
