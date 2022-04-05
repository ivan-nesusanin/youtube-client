import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  @Input() showSortBlock!: boolean;

  @Output() eSortByDate = new EventEmitter<Event>();

  sortByDate(event: Event): void {
    this.eSortByDate.emit(event);
  }
}
