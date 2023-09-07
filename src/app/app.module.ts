import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './MainDashBoard/dashboard/dashboard.component';

import { UserServiceComponent } from './MainDashBoard/UserService-Folder/user-service/user-service.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ListUserServiceComponent } from './MainDashBoard/UserService-Folder/list-user-service/list-user-service.component';
import { UpdateUsersComponent } from './MainDashBoard/UserService-Folder/update-users/update-users.component';
import { DeleteUsersComponent } from './MainDashBoard/UserService-Folder/delete-users/delete-users.component';
import { CreateHotelsComponent } from './MainDashBoard/HotelService-Folder/create-hotels/create-hotels.component';
import { ListHotelsComponent } from './MainDashBoard/HotelService-Folder/list-hotels/list-hotels.component';
import { UpdateHotelComponent } from './MainDashBoard/HotelService-Folder/update-hotel/update-hotel.component';
import { UsernavbarComponent } from './MainDashBoard/UserService-Folder/usernavbar/usernavbar.component';
import { HotelnavbarComponent } from './MainDashBoard/HotelService-Folder/hotelnavbar/hotelnavbar.component';
import { RatingnavbarComponent } from './MainDashBoard/RatingService-Folder/ratingnavbar/ratingnavbar.component';
import { AddRatingsComponent } from './MainDashBoard/RatingService-Folder/add-ratings/add-ratings.component';
import { ListRatingsComponent } from './MainDashBoard/RatingService-Folder/list-ratings/list-ratings.component';
import { UpdateRatingComponent } from './MainDashBoard/RatingService-Folder/update-rating/update-rating.component';
import { CommunicationComponent } from './components/communication/communication.component';
// import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserServiceComponent,
    UserServiceComponent,
    UserServiceComponent,
    ListUserServiceComponent,
    UpdateUsersComponent,
    DeleteUsersComponent,
    CreateHotelsComponent,
    ListHotelsComponent,
    UpdateHotelComponent,
    UsernavbarComponent,
    HotelnavbarComponent,
    RatingnavbarComponent,
    AddRatingsComponent,
    ListRatingsComponent,
    UpdateRatingComponent,
    CommunicationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
