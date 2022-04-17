import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { SharedModule } from '../shared/shared.module';
import { /* Route,  */RouterModule } from '@angular/router';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SettingsButtonComponent } from './components/settings-button/settings-button.component';

// export const coreRoutes: Route[] = [
//   { path: '**', component: NotFoundPageComponent },
// ];

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundPageComponent,
    SearchInputComponent,
    SettingsButtonComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    NotFoundPageComponent,
  ],
})
export class CoreModule { }
