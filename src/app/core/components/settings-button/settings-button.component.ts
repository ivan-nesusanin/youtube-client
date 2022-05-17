import { Component } from '@angular/core';
import { SendEventService } from '@data/app/core/services/send-event.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {
  constructor(private sendEventService: SendEventService) {}

  public showSortBlock = true;

  useService() {
    this.sendEventService.changeSettingsClickValue(
      (this.showSortBlock = !this.showSortBlock)
    );
  }
}
