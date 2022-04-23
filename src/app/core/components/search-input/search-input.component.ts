import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SendEventService } from '@data/app/shared/services/send-event.service';
import { GetDataService } from '@data/app/youtube/services/get-data.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit{
  public searchForm!: FormGroup;

  constructor(public sendEventService: SendEventService, private getDataService: GetDataService) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });

    this.searchForm.valueChanges.pipe(
      debounceTime(500),
    ).subscribe(res => this.getDataService.getData(res.search).subscribe(x => console.log(x)));
  }

}
