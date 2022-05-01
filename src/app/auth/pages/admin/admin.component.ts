import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  public adminForm!: FormGroup;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.adminForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl(null, Validators.maxLength(255)),
      image: new FormControl(null, [
        Validators.required,
        Validators.pattern('(https?://)?([\da-z.-]+)\.([a-z.]{2,6})[/\w .-]*/?'),
      ]),
      video: new FormControl(null, [
        Validators.required,
        Validators.pattern('(https?://)?([\da-z.-]+)\.([a-z.]{2,6})[/\w .-]*/?'),
      ]),
      date: new FormControl(null, [
        Validators.required,
        this.validatorOfDate,
      ]),
    });
  }

  validatorOfDate(control: AbstractControl): { [key: string]: boolean } | null {
    const enteredDate = +(new Date(control.value));
    if (Date.now() < enteredDate) {
      return { isValidDate: true };
    }
    return null;
  }

}
