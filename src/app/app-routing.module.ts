import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './auth/pages/register-form/register-form.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { DetailsComponent } from './youtube/pages/details/details.component';
import { MainComponent } from './youtube/pages/main/main.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full',
  },
  {
    path: 'main', component: MainComponent,
  },
  {
    path: 'auth', component: RegisterFormComponent,
  },
  {
    path: 'detail/:id', component: DetailsComponent,
  },
  {
    path: '**', component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
