import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { DetailsComponent } from './youtube/pages/details/details.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'main', pathMatch: 'full',
  },
  {
    path: 'main',
    // canLoad: [AuthGuard],
    loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
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
