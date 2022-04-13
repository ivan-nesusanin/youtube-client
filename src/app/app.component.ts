import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public showSortBlock = true;

  public showSearchBlock = false;

  public clickDate: boolean | undefined;

  public clickViews: boolean | undefined;

  public phrase!: string;

  getPhrase(model: string) {
    this.phrase = model;
  }
}
