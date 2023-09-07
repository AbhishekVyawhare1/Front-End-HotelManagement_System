import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './MainDashBoard/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserServiceComponent } from './MainDashBoard/UserService-Folder/user-service/user-service.component';
import { ListUserServiceComponent } from './MainDashBoard/UserService-Folder/list-user-service/list-user-service.component';
import { UpdateUsersComponent } from './MainDashBoard/UserService-Folder/update-users/update-users.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full', },

  { path: 'signup', component: SignupComponent, pathMatch: 'full', },

  { path: 'login', component: LoginComponent, pathMatch: 'full', },

  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },

  // userService
  { path: 'update-users/:userId', component: UpdateUsersComponent, pathMatch: 'full' },

  { path: 'user-service', component: UserServiceComponent, pathMatch: 'full' },

  { path: 'list-user-service', component: ListUserServiceComponent, pathMatch: 'full' },

  { path: 'usersnavbar', component: UsernavbarComponent, pathMatch: 'full' },

  //HotelService
  { path: 'create-hotels', component: CreateHotelsComponent, pathMatch: 'full' },

  { path: 'list-hotels', component: ListHotelsComponent, pathMatch: 'full' },

  { path: 'update-hotel/:hotelId', component: UpdateHotelComponent, pathMatch: 'full' },

  { path: 'hotelsnavbar', component: HotelnavbarComponent, pathMatch: 'full' },


  //RatingService
  { path: 'ratingsnavbar', component: RatingnavbarComponent, pathMatch: 'full'},

  {path: 'addrating', component: AddRatingsComponent, pathMatch: 'full'},

  {path: 'listRatings', component: ListRatingsComponent, pathMatch: 'full'},
  
  {path: 'update-rating/:ratingId', component: UpdateRatingComponent, pathMatch: 'full'},

  //Component

  {path: 'communication', component:CommunicationComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
