import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { Restaurant } from '../restaurant';
import { RemRestaurantComponent } from '../rem-restaurant/rem-restaurant.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit, OnInit {
  // oninit
  displayedColumns: string[] = ['id', 'name', 'owner', 'mobile', 'email', 'location', 'rating', 'action'];
  restaurants: Restaurant[] = [];

  constructor(private restaurant: RestaurantService) {}
  ngOnInit(): void {
    this.restaurant.getAllRestaurant().subscribe((data) => {
      this.restaurants = data;
    });
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

  // openDeleteModal(enterAnimationDuration: string, exitAnimationDuration: string, id: number, name: string): void {
  //   const deleteConfirmConst = this.dialog.open(RemRestaurantComponent, {
  //     width: '350px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //     data: { id, name },
  //   });

  //   deleteConfirmConst.afterClosed().subscribe((result) => {
  //     if (result) {
  //       this.restaurants = this.restaurants.filter((f) => f.id !== id);
  //     }
  //   });
  // }
}
