import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      description: new FormControl(null),
      image: new FormControl(null),
      video: new FormControl(null),
      date: new FormControl(null),
    });
  }

}
