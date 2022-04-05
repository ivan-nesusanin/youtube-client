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
import { SortByDatePipePipe } from './pipes/sort-by-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultComponent,
    SearchItemComponent,
    SortingComponent,
    LabelColorDirective,
    SortByDatePipePipe,
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
