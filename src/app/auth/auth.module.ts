import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

export const authRoutes: Route[] = [
  { path: '', component: RegisterFormComponent },
];

@NgModule({
  declarations: [
    RegisterFormComponent,
  ],
  imports: [
    RouterModule.forChild(authRoutes),
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [
    RegisterFormComponent,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
})
export class AuthModule { }
