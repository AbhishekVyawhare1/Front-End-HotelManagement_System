import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Userservice2 } from 'src/app/userservice2';
import { Userservice2Service } from 'src/app/userservice2.service';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.css']
})
export class UpdateUsersComponent implements OnInit {


  constructor(private activeRouter: ActivatedRoute, private service2Service: Userservice2Service, private router: Router) { }
  userId!: string;
  userserve: Userservice2 = new Userservice2();


  ngOnInit(): void {
    this.userId = this.activeRouter.snapshot.params['userId'];
    console.log(this.userId);
    this.service2Service.getUserById(this.userId).subscribe(data => {
      this.userserve = data;
      console.log(this.userserve);
    })
  }

  updateUserData() {
    this.service2Service.UpdateUsersData(this.userserve).subscribe(data => {
      alert("Updated SuccessFully");
      this.router.navigate(['/list-user-service']);
    }, error => alert("Sorry unable to update"));

  }

}
