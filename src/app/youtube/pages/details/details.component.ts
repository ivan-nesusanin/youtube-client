import { Component, OnInit } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';
import { GetDataService } from '../../services/get-data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  public card?: ISearchItem;

  constructor(private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.getDataService.info$.subscribe(value => console.log(value));
  }
}
