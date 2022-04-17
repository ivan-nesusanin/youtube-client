import { Component } from '@angular/core';
import { SendEventService } from '@data/app/shared/services/send-event.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {

  constructor(public sendEventService: SendEventService) { }
}
