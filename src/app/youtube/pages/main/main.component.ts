import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-item.model';
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

  public showPanel!: boolean;

  public sub!: Subscription;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.getDataService.searchVideo$.subscribe((res) => (this.cards = res));

    this.sub = this.getDataService.showPanel$.subscribe(
      (res) => (this.showPanel = res)
    );
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  public getPhrase(model: string) {
    this.phrase = model;
  }
}
