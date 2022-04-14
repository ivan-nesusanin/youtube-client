import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { MaterialModule } from '../shared/material.module';
import { StatisticsComponent } from './components/statistics/statistics.component';



@NgModule({
  declarations: [
    DetailsComponent,
    StatisticsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class YoutubeModule { }
