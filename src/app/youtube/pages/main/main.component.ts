import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-item.model';
import { IStatisticsItem } from '../../models/statistics.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, OnDestroy {
  public clickDate: boolean | undefined;

  public clickViews: boolean | undefined;

  public phrase!: string;

  public cards!: ISearchItem[];

  public stat!: IStatisticsItem;

  public showPanel!: boolean;

  public subVideos!: Subscription;

  public subShowPanel!: Subscription;

  public subStat!: Subscription;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.subVideos = this.getDataService.searchVideo$.subscribe((res) => {
      this.cards = [];
      res.reduce((acc, item) => {
        this.subStat = this.getDataService
          .getStatistics(item.id.videoId)
          .subscribe((response) => {
            return acc.push({
              ...item,
              statistics: response?.items[0]?.statistics || [],
            });
          });
        return acc;
      }, this.cards);
      console.log(this.cards);
    });

    this.subShowPanel = this.getDataService.showPanel$.subscribe(
      (res) => (this.showPanel = res)
    );
  }

  ngOnDestroy(): void {
    this.subVideos?.unsubscribe();
    this.subShowPanel?.unsubscribe();
    this.subStat?.unsubscribe();
  }

  public getPhrase(model: string) {
    this.phrase = model;
  }
}
