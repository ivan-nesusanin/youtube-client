import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SendEventService } from '@data/app/shared/services/send-event.service';
import { ISearchItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  public card?: ISearchItem;

  public cards!: ISearchItem[];

  public id = '';

  constructor(
    private getDataService: GetDataService,
    private readonly route: ActivatedRoute,
    public sendEventService: SendEventService,
  ) { }

  ngOnInit(): void {
    this.getCardInfo();
  }

  getCardInfo(): void {
    this.id = this.route.snapshot.params['id'];
    // this.card = this.cards.find(item => item.id === this.id);
  }
}
