import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GetDataService } from '@data/app/youtube/services/get-data.service';
import { debounceTime, distinctUntilChanged, filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit, OnDestroy {
  public searchForm!: FormGroup;

  private sub!: Subscription;

  constructor(private getDataService: GetDataService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      search: new FormControl(''),
    });

    this.sub = this.searchForm.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        filter((res) => res.search?.trim().length > 2)
      )
      .subscribe((res) => {
        this.getDataService.getVideos(res.search).subscribe((x) => x);
      });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
