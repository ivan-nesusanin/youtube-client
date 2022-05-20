import {
  AfterContentChecked,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { SendEventService } from '@data/app/core/services/send-event.service';
import { ISearchItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterContentChecked, OnDestroy {
  public showSortBlock = true;

  public clickDate: boolean | undefined;

  public clickViews: boolean | undefined;

  public phrase!: string;

  public cards!: ISearchItem[];

  public sub!: Subscription;

  constructor(
    private getDataService: GetDataService,
    private sendEventService: SendEventService
  ) {}

  ngOnInit(): void {
    this.sub = this.sendEventService.clickSettingsValue$.subscribe(
      (value) => (this.showSortBlock = value)
    );
  }

  ngAfterContentChecked(): void {
    this.cards = this.getDataService.searchVideo;
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  public getPhrase(model: string) {
    this.phrase = model;
  }
}
