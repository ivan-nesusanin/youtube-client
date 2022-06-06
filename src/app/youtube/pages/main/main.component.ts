import { AfterContentChecked, Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ISearchItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements AfterContentChecked, OnDestroy {
  public clickDate: boolean | undefined;

  public clickViews: boolean | undefined;

  public phrase!: string;

  public cards!: ISearchItem[];

  public showPanel!: boolean;

  public sub!: Subscription;

  constructor(private getDataService: GetDataService) {}

  ngAfterContentChecked(): void {
    this.cards = this.getDataService.searchVideo;
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
