import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchItem, IStatisticsItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public card?: ISearchItem;

  public cards!: ISearchItem[];

  public stat!: IStatisticsItem;

  public id = '';

  constructor(
    private getDataService: GetDataService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.cards = this.getDataService.searchVideo;

    this.card = this.cards.find((elem) => elem.id.videoId === this.id);
  }
}
