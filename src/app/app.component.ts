import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showSortBlock = false;

  public showSearchBlock = false;

  public clickDate: boolean | undefined;

  public clickViews: boolean | undefined;

  public phrase!: string;

  showSorting(event: any): void {
    if (event) this.showSortBlock = !this.showSortBlock;
  }

  showSearch(event: any): void {
    if (event) this.showSearchBlock = true;
  }

  sortByDate(event: any): void {
    if (event) this.clickDate = !this.clickDate;
  }

  sortByViews(event: any): void {
    if (event) this.clickViews = !this.clickViews;
  }

  getPhrase(model: string) {
    this.phrase = model;
  }
}
