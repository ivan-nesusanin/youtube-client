import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISearchItem, IStatisticsItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit, OnDestroy {
  @Input() card!: ISearchItem;

  public stat?: IStatisticsItem;

  public sub!: Subscription;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.sub = this.getDataService
      .getStatistics(this.card.id.videoId)
      .subscribe((res) => {
        this.stat = res.items[0].statistics;
      });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
