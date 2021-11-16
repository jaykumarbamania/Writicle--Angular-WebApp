import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../forms.component.css']
})
export class RegisterComponent implements OnInit {

  name:string="";
  age:number = 0;
  mobileNum:number=0;
  email:string="";
  password:string = "";
  cpassword:string = "";
  
  registerForm:FormGroup= new FormGroup({});
  constructor(
    private registerService:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name:new FormControl("Jay",[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      age:new FormControl(21,[Validators.required,Validators.min(1),Validators.max(100)]),
      mobileNum:new FormControl("9898989898",[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]),
      email:new FormControl("jay@gmail.com",[Validators.required,Validators.email]),
      password:new FormControl("Jay@161199",[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{6,12}$')]),
      cpassword:new FormControl("Jay@161199",[Validators.required])
    },
    {
      validators:this.matchPassword
    }
    );
  }



  get getName(){
    return this.registerForm.get("name");
  }

  get getAge(){
    return this.registerForm.get("age");
  }

  get getMobile(){
    return this.registerForm.get("mobileNum");
  }

  get getEmail(){
    return this.registerForm.get("email");
  }

  get getPass(){
    return this.registerForm.get("password");
  }

  get getCPass(){
    return this.registerForm.get("cpassword");
  }

  
  registerFunction():void{
  //  this.name = this.registerForm.value;
   this.age = this.registerForm.get("age")?.value;
   this.mobileNum = this.registerForm.get("mobileNum")?.value;
   this.email = this.registerForm.get("email")?.value;
   this.name = this.registerForm.get("name")?.value;
   this.password = this.registerForm.get("password")?.value;

   this.registerService.registerUser(this.name,this.password,this.email,this.mobileNum.toString(),this.age);
   this.router.navigate(['/login'])
  }

  // private matchPassword(form:FormGroup):null|{}{
  //   let pass = form.get("password")!;
  //   let cpass = form.get("cpassword")!;
  //   if(pass.value == cpass.value)
  //     return null;
  //   else 
  //     return {passMismatch:true}
  // }

  private matchPassword(regForm:FormGroup):null|{}{//null or object
    let passControl = regForm.get("password");
    let confirmPassControl = regForm.get("cpassword");
    if(passControl.value == confirmPassControl.value)
      return null;//validation passed
    else
      return {passMissMatch:true};//validation failed
    }

} 

