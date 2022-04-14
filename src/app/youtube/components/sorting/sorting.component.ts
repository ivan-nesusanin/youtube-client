import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.scss'],
})
export class SortingComponent {
  @Input() showSortBlock!: boolean;

  @Output() eSortByDate = new EventEmitter<void>();

  @Output() eSortByViews = new EventEmitter<void>();

  @Input() phrase = '';

  @Output() eGetPhrase = new EventEmitter<string>();

  sortByDate(): void {
    this.eSortByDate.emit();
  }

  sortByViews(): void {
    this.eSortByViews.emit();
  }

  getPhrase(model: string): void {
    this.phrase = model;
    this.eGetPhrase.emit(model);
  }
}
