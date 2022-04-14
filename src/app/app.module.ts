import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { SearchResultComponent } from './search/search-result/search-result.component';
import { SortingComponent } from './search/sorting/sorting.component';
import { LabelColorDirective } from './directive/label-color.directive';
import { FormsModule } from '@angular/forms';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { RegisterFormComponent } from './auth/pages/register-form/register-form.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultComponent,
    SearchItemComponent,
    SortingComponent,
    LabelColorDirective,
    SortByDatePipe,
    SortByViewsPipe,
    FilterByWordPipe,
    RegisterFormComponent,
    NotFoundPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
