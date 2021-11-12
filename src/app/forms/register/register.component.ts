import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(): void {
    this.registerForm=new FormGroup({
      name:new FormControl("Jay",[Validators.required,Validators.pattern("^[A-Za-z]+$")]),
      age:new FormControl(0,[Validators.required,Validators.min(1),Validators.max(100)]),
      mobileNum:new FormControl("98989898",[Validators.required,Validators.minLength(10),Validators.maxLength(11),Validators.pattern("^[0-9]*$")]),
      email:new FormControl("jay@gmail.com",[Validators.required,Validators.email]),
      password:new FormControl("J@ykumar99",[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\\D*\\d)[A-Za-z\\d!$%@#£€*?&]{8,}$')]),
      cpassword:new FormControl("J@y",Validators.required)
    },
    {
      validators:this.matchPassword
    }
    );
  }

  registerFunction():void{
    console.log(this.registerForm.value);
    console.log(this.registerForm.get("name")?.value);
    console.log(this.registerForm.get("age")?.value);
    console.log(this.registerForm.get("mobileNum")?.value);
    console.log(this.registerForm.get("email")?.value);
    console.log(this.registerForm.get("userName")?.value);
    console.log(this.registerForm.get("password")?.value);
    console.log(this.registerForm.get("cpassword")?.value);
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

  get getUserName(){
    return this.registerForm.get("userName");
  }

  get getPass(){
    return this.registerForm.get("password");
  }

  get getCPass(){
    return this.registerForm.get("cpassword");
  }

  private matchPassword(form:FormGroup):null|{}{
    let pass = form.get("password")!;
    let cpass = form.get("cpassword")!;
    if(pass.value == cpass.value)
      return null;
    else 
      return {passMismatch:true}
  }

} 

