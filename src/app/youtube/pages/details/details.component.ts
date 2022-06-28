import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, OnDestroy {
  public card?: ISearchItem;

  public id = '';

  public sub!: Subscription;

  constructor(
    private getDataService: GetDataService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.sub = this.getDataService.searchVideo$.subscribe(
      (res) => (this.card = res.find((elem) => elem.id.videoId === this.id))
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
