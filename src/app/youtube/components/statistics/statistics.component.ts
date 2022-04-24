import { Component, Input, OnInit } from '@angular/core';
import { ISearchItem, IStatisticsItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit{
  @Input() card!: ISearchItem;

  public stat?: IStatisticsItem;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.getStatistics(this.card.id.videoId)
      .subscribe((res) => {
        this.stat = res.items[0].statistics;
      });
  }

}
