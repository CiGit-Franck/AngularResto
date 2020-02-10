import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url = 'http://localhost:4200';

  constructor(private httpClient: HttpClient) { }

  getRestaurantList() {
    return this.httpClient.get(url + '/api/restaurants');
  }

  getFilteredRestaurantList(lowest, highest) {
    let params = new HttpParams();
    params = params.append('lowestNote', lowest);
    params = params.append('highestNote', highest);

    const options = { params: params };

    return this.httpClient.get(url + '/api/restaurants/filter', options)
  }

  addReviewToRestaurant(restaurantId, review) {
    return this.httpClient.post(url + '/api/restaurants/' + restaurantId + '/reviews', review);
  }

  deleteReviewFromRestaurant(restaurantId, reviewId) {
    return this.httpClient.delete(url + '/api/restaurants/' + restaurantId + '/reviews/' + reviewId);
  }
}
