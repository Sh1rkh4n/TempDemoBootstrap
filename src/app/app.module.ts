import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRestaurantComponent } from './add-restaurant/add-restaurant.component';
import { EditRestaurantComponent } from './edit-restaurant/edit-restaurant.component';
import { RemRestaurantComponent } from './rem-restaurant/rem-restaurant.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurantComponent,
    EditRestaurantComponent,
    RemRestaurantComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
