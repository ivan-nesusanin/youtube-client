import { AfterContentChecked, Component, OnDestroy, OnInit } from '@angular/core';
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

  public request!: ISearchItem[];

  public cards!: any;

  public stat!: string;

  public arrIds!: string[];

  public sub!: Subscription;

  constructor(
    private getDataService: GetDataService,
    private sendEventService: SendEventService,
  ) {}

  ngOnInit(): void {
    this.sub = this.sendEventService.clickSettingsValue$
      .subscribe((value) => this.showSortBlock = value);
  }

  ngAfterContentChecked(): void {
    this.cards = this.getDataService.searchVideo;
    // this.request = this.getDataService.searchVideo;

    // this.arrIds = this.getDataService.arrIds;

    // this.cards = this.request
    //   ?.reduce((newArr: any[], item: { viewCount: string; }, index: number) => {
    //     let viewCount = '';
    //     this.getDataService.getStatistics(this.arrIds[index])
    //       .subscribe(res => viewCount = res.item[0].statistics.viewCount);
    //     item.viewCount = viewCount;
    //     newArr.push(item);
    //     return newArr;
    //   }, []);
    // console.log(this.cards);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getPhrase(model: string) {
    this.phrase = model;
  }

}


