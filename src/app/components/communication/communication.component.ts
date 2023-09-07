import { Component, OnInit } from '@angular/core';
import { Userservice2Service } from 'src/app/userservice2.service';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.css']
})
export class CommunicationComponent implements OnInit{

  userId : string='';
  userData: any=null;
  userNotFound: boolean =false;

  constructor(private userService: Userservice2Service){}

  ngOnInit(): void {
    
  }


  GetAllData(){
    console.log("error in getall data");
    this.userService.getCommunicationData(this.userId).subscribe(
      (data:any)=>
      {

        if(data)
        {
          this.userData=data;
          console.log("data is ",data);
          

        }
      },
      error=>
      {

        alert("error in get all data")
      }
    )
     
  

}
}
