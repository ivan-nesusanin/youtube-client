import { Component, OnInit } from '@angular/core';
import { SendEventService } from '@data/app/shared/services/send-event.service';
import { ISearchItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public showSortBlock = true;

  public showSearchBlock!: boolean;

  public clickDate: boolean | undefined;

  public clickViews: boolean | undefined;

  public phrase!: string;

  public cards!: ISearchItem[];

  constructor(
    private getDataService: GetDataService,
    public sendEventService: SendEventService,
  ) {}

  ngOnInit(): void {

    this.sendEventService.clickSearchValue$.subscribe((value) => this.showSearchBlock = value);

    this.sendEventService.clickSettingsValue$.subscribe((value) => this.showSortBlock = value);

    // this.getDataService.getData().subscribe(res => console.log(res));

  }

  getPhrase(model: string) {
    this.phrase = model;
  }

}


