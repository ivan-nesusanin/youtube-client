import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  @Input() showSortBlock!: boolean;

  @Output() eSortByDate = new EventEmitter<Event>();

  @Output() eSortByViews = new EventEmitter<Event>();

  @Input() phrase = '';

  @Output() eGetPhrase = new EventEmitter<string>();

  sortByDate(event: Event): void {
    this.eSortByDate.emit(event);
  }

  sortByViews(event: Event): void {
    this.eSortByViews.emit(event);
  }

  getPhrase(model: string): void {
    this.phrase = model;
    this.eGetPhrase.emit(model);
  }
}
