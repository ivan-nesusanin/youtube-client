import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SendEventService } from '@data/app/shared/services/send-event.service';
import { GetDataService } from '@data/app/youtube/services/get-data.service';
import { debounceTime, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy{
  public searchForm!: FormGroup;

  private sub!: Subscription;

  constructor(public sendEventService: SendEventService, private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });

    this.sub = this.searchForm.valueChanges.pipe(
      debounceTime(500),
    ).subscribe(res => {
      if (res.search.length > 2) {
        this.getDataService.getVideos(res.search).subscribe(x => x);
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
