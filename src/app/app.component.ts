import { Component } from '@angular/core';
import { ListingProductModel } from './common/model/listingentity.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public obj: ListingProductModel;
  constructor() {
    this.obj = new ListingProductModel(); console.log(this.obj); }
}
