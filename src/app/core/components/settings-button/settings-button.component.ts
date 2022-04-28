import { Component } from '@angular/core';
import { SendEventService } from '@data/app/shared/services/send-event.service';

@Component({
  selector: 'app-settings-button',
  templateUrl: './settings-button.component.html',
  styleUrls: ['./settings-button.component.scss'],
})
export class SettingsButtonComponent {

  constructor(public sendEventService: SendEventService) { }

  public showSortBlock = true;

}
