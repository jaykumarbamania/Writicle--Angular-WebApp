import { Injectable } from '@angular/core';
import { Users } from 'src/assets/interface/User';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  users:Users[] = [
    new Users("jay1","J@y1","jay1@gmail.com","9898989898",22),
    new Users("jay2","J@y2","jay2@gmail.com","9898989898",23)
  ];

 

  constructor() { }



  registerUser(username:string,password:string,email:string,mobile:string,age:number){
    this.users.push(new Users(username,password,email,mobile,age))
    alert('Registered Successfully')
    console.log(this.users)
  }

  isLogined:boolean =false;
  checkUser(username,password){
    this.users.find(value =>{
      if(value.username == username && value.password == password){
        console.log("Confirmed : "+value.username+value.password);
        this.isLogined = true; 
      }
    })
    return this.isLogined
  }

  logoutUser(){
    this.isLogined = false;
  }

}
