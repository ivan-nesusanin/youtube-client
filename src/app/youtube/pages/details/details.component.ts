import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public card?: ISearchItem;

  public id = '';

  constructor(
    private getDataService: GetDataService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.getDataService.searchVideo$.subscribe(
      (res) => (this.card = res.find((elem) => elem.id.videoId === this.id))
    );
  }
}
