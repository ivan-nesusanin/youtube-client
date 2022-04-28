import { NgModule } from '@angular/core';
import { DetailsComponent } from './pages/details/details.component';
import { SharedModule } from '../shared/shared.module';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { SortingComponent } from './components/sorting/sorting.component';
import { LabelColorDirective } from './directive/label-color.directive';
import { FilterByWordPipe } from './pipes/filter-by-word.pipe';
import { SortByDatePipe } from './pipes/sort-by-date.pipe';
import { SortByViewsPipe } from './pipes/sort-by-views.pipe';
import { MainComponent } from './pages/main/main.component';
import { RouterModule } from '@angular/router';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { ColorLabelComponent } from './components/color-label/color-label.component';

@NgModule({
  declarations: [
    DetailsComponent,
    StatisticsComponent,
    SearchItemComponent,
    SearchResultComponent,
    SortingComponent,
    LabelColorDirective,
    FilterByWordPipe,
    SortByDatePipe,
    SortByViewsPipe,
    MainComponent,
    ColorLabelComponent,
  ],
  imports: [
    RouterModule,
    SharedModule,
    YoutubeRoutingModule,
  ],
  exports: [
    DetailsComponent,
    StatisticsComponent,
    SearchItemComponent,
    SearchResultComponent,
    SortingComponent,
    LabelColorDirective,
    FilterByWordPipe,
    SortByDatePipe,
    SortByViewsPipe,
  ],
})
export class YoutubeModule { }
