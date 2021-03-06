import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  
  constructor(
    private loginService:LoginService,
    private router:Router
    ) {  }
  
  ngOnInit(): void {
    
  }

  isLogineed:boolean=this.loginService.isLogined;

  logOut(){
    this.loginService.logoutUser();
    this.isLogineed = this.loginService.isLogined;
    this.router.navigate(['login']);
  }


}
