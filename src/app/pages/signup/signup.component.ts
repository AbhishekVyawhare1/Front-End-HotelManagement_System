import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private snack: MatSnackBar) { }


  public user1 = {
    // id: '',
    name: '',
    email: '',
    password: '',
  };


  formSubmit() {
    // console.log(this.user1);
    // if (this.user1.id == '' || this.user1.id == null) {
    //   // alert("Id Is Required!!!!!")
    //   this.snack.open("UserId Is Required####", '', {
    //     duration: 3000,
    //     verticalPosition: 'top',
    //     horizontalPosition: 'right'
    //   })
    //   return;
    // }

    //add User:userService
    this.userService.addUser(this.user1).subscribe(
      (data: any) => {
        //success
        console.log(data)
        // alert('success')
       // Swal.fire('Success', 'User is Registered' + data.id, 'success');
       alert("success")
        // this.login.loginUser(data.token);

        // window.location.href='/dashboard'
        this.userService.addUser(data.User)
        window.location.href = '/login'

      },
      (error) => {
        //error
        console.log(error)
        // alert('Something Went Wrong')
        this.snack.open('something went WRONG@@@@', '', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'left'
        })
      }
    )
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
