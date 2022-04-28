import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@data/app/core/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {

  public form!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    });
  }

  submit(): void {
    this.authService.login(this.form.value.login, true);
    this.router.navigate(['/main']);
  }

}
