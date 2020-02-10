import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.css']
})
export class RestoListComponent implements OnInit {

  restaurantList;

  filterForm = this.formBuilder.group({
    lowestNote: 0,
    highestNote: 5
  })

  constructor(private dataService: DataService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.restaurantList = this.dataService.getRestaurantList();
  }

  onFilter(filteringValues) {
    this.restaurantList = this.dataService.getFilteredRestaurantList(filteringValues.lowestNote, filteringValues.highestNote);
  }

}
