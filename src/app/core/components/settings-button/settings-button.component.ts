import { Component } from '@angular/core';
import { ShowSortPanelService } from '../../services/show-sort-panel.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  public showPanel = true;

  constructor(private showSortPanel: ShowSortPanelService) {}

  public changeShowPanel(): void {
    this.showSortPanel.showSortPanel((this.showPanel = !this.showPanel));
  }
}
