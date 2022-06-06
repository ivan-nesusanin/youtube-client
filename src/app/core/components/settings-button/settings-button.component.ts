import { Component } from '@angular/core';
import { GetDataService } from '@data/app/youtube/services/get-data.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  public showPanel = true;

  constructor(private getDataService: GetDataService) {}

  public changeShowPanel(): void {
    this.getDataService.showSortPanel((this.showPanel = !this.showPanel));
  }
}
