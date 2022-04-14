import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFormComponent } from './auth/pages/register-form/register-form.component';
import { SearchResultComponent } from './youtube/components/search-result/search-result.component';
// import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { DetailsComponent } from './youtube/pages/details/details.component';

const routes: Routes = [
  {
    path: '', component: SearchResultComponent,
  },
  {
    path: 'auth', component: RegisterFormComponent,
  },
  // {
  //   path: 'detail/:id', component: RegisterFormComponent,
  // },
  {
    path: '**', component: /* NotFoundPageComponent */ DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
