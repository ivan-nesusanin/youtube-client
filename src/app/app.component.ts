import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showSortBlock = false;

  public showSearchBlock = false;

  showSorting(event: any): void {
    if (event) {
      this.showSortBlock = !this.showSortBlock;
    }
  }

  showSearch(event: any): void {
    if (event) {
      this.showSearchBlock = true;
    }
  }
}
