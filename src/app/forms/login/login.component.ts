import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../forms.component.css']
})
export class LoginComponent implements OnInit {

  public username:string;
  public password:string;
  
  loginForm:FormGroup = new FormGroup({});

  constructor(
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username:new FormControl("jay1",[Validators.required]),
      password: new FormControl("J@y1",[Validators.required])
    })
  }

  loginFunction():void{
 
    this.username = this.loginForm.get("username")?.value;
    this.password = this.loginForm.get("password")?.value;
    console.log(this.username+" "+this.password)
    let verify= this.loginService.checkUser(this.username, this.password)
    if(verify){
      alert('Login Successfully')
      this.router.navigate(['/feeds']);
    }
    else
      alert('Invalid Credentials!!')

    // console.log(this.user)
    // !this.user ? console.log("Invalid Credentials") : console.log("Login Successfully")
  }

  get getUserName(){
    return this.loginForm.get("username");
  }

  get getPass(){
    return this.loginForm.get("password");
  }

  myColor:{
    errorTxt:true,
    error:true
  }

}
