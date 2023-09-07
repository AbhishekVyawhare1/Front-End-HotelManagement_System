import { Component,OnInit } from '@angular/core';
import { Userservice2 } from 'src/app/userservice2';
import { UserServiceComponent } from '../user-service/user-service.component';
import { Userservice2Service } from 'src/app/userservice2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-user-service',
  templateUrl: './list-user-service.component.html',
  styleUrls: ['./list-user-service.component.css']
})
export class ListUserServiceComponent implements OnInit{



  constructor(private userService2Service:Userservice2Service, private router: Router){}


  userservice2: Userservice2[]=[];

  ngOnInit(): void {

    this.userService2Service.getAllUSers().subscribe(data=>{
      this.userservice2=data;
    });
  }

  updateUser(userId: string){
    console.log(userId);
    this.router.navigate(["update-users",userId])
  }


  deleteUser(users2: string){
    this.userService2Service.deleteUSER(users2).subscribe(data=>{
      console.log(data);
      this.ngOnInit();
    })
  }

  
}
