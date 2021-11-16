export class Users{
    email:string;
    username:string;
    password:string;
    mobile:string;
    age:number;

    constructor(username:string,password:string,email:string,mobile:string,age:number){
        this.username = username;
        this.password = password;
        this.email = email;
        this.mobile = mobile;
        this.age = age;
    }
}
