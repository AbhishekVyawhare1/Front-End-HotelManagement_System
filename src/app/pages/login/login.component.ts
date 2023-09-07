import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    username:'',
    password:'',
  }
  constructor(private snack:MatSnackBar,private login:LoginService ) { }

  ngOnInit(): void {}

  formSubmit(){
    console.log("Login For Submitted")

    if(this.loginData.username.trim()=='' || this.loginData.username==null)
    {
      this.snack.open('username is required!!','',{
        duration:4000,
      });
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null)
    {
      this.snack.open('password is required!!','',{
        duration:4000,
      });
      return;
    }



    //request to server to generate token 

    this.login.generateTOken(this.loginData).subscribe(
      (data:any)=>{
        // const token=response;
        console.log('success');
        console.log(data);

        this.login.loginUser(data.token);

        window.location.href='/dashboard'
      },
      (error)=>{
        console.log('Error !');
        console.log(error);
        this.snack.open('Invalid Details!! Try AGAIN','',{
          duration:3000,
        });
      }
      );
  }
}
