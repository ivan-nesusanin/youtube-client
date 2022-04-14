import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

export const authRoutes: Route[] = [
  { path: '', component: RegisterFormComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FormsModule,
    MaterialModule,
  ],
})
export class AuthModule { }