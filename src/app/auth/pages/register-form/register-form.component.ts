import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@data/app/core/services/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  public hide = true;

  public form!: FormGroup;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      login: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])'),
        this.validatorOfRegister,
        this.validatorOfNumber,
        this.validatorOfSymbol,
      ]),
    });
  }

  submitForm(): void {
    this.authService.login(this.form.value.login, true);
    this.router.navigate(['/main']);
  }

  validatorOfRegister(control: AbstractControl): { [key: string]: boolean } | null {
    const regExp = /(?=.*[a-z])(?=.*[A-Z])/;
    if (!regExp.test(control.value)) {
      return { isValidRegister: true };
    }
    return null;
  }

  validatorOfNumber(control: AbstractControl): { [key: string]: boolean } | null {
    const regExp = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;
    if (!regExp.test(control.value)) {
      return { isValidNumber: true };
    }
    return null;
  }

  validatorOfSymbol(control: AbstractControl): { [key: string]: boolean } | null {
    const regExp = /(?=.*[$@$!%*?&])/;
    if (!regExp.test(control.value)) {
      return { isValidSymbol: true };
    }
    return null;
  }
}
