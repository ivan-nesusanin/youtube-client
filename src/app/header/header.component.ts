import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() eShowSorting = new EventEmitter<void>();

  @Output() eShowSearch = new EventEmitter<void>();

  showSorting() {
    this.eShowSorting.emit();
  }

  showSearch() {
    this.eShowSearch.emit();
  }
}
