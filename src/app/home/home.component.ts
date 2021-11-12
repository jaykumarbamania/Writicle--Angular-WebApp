import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { 
    this.fetchFeedData();
  }

  feeds:any;

  ngOnInit(): void {
  }

  fetchFeedData(){
    this.http.get("assets/jsonData/feedsData.json")
    .subscribe((data) => {
      this.feeds = data as any[]
      console.log(this.feeds)
    })
  }

}
