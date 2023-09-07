import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Userservice2 } from 'src/app/userservice2';
import { Userservice2Service } from 'src/app/userservice2.service';

@Component({
  selector: 'app-user-service',
  templateUrl: './user-service.component.html',
  styleUrls: ['./user-service.component.css']
})
export class UserServiceComponent implements OnInit{

  userservice: Userservice2 = new Userservice2();

  constructor(private userService2 : Userservice2Service, private router: Router){};

  ngOnInit(): void {

  }

  addUserData(){
     this.userService2.addUsers(this.userservice).subscribe(data=>{
      alert("User Registered Properly!!!!!");
      this.goTOList();
     },error=>alert("Sorry Unable To Insert User Data"));
  }



  goTOList(){
    this.router.navigate(['/list-user-service']);
  }

}
