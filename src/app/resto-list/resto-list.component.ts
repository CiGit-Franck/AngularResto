import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.css']
})
export class RestoListComponent implements OnInit {

  restaurantList;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.restaurantList = this.dataService.getRestaurantList();
  }

}
