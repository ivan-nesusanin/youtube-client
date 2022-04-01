import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{
  @Output() eShowSorting = new EventEmitter<Event>();

  showSorting(event: Event) {
    this.eShowSorting.emit(event);
  }
}
