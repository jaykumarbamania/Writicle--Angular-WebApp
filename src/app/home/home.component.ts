
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FeedsService } from '../services/feeds.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private feedService: FeedsService,
    private router:Router,
    private activatedRoute:ActivatedRoute
    ) { 
  }

  feeds:any;
  feedId:number;
  ngOnInit(): void {
    this.feedService.getFeedsData()
    .subscribe(data => {
      this.feeds = data
      console.log(this.feeds)
    })
    
    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.feedId = id;
    })
  }

  // fetchFeedData(){
  //   this.http.get("assets/jsonData/feedsData.json")
  //   .subscribe((data) => {
  //     this.feeds = data as any[]
  //     console.log(this.feeds)
  //   })
  // }

  onSelect(feed){
    this.feedId = feed.feedId;
    this.router.navigate([feed.feedId],{relativeTo:this.activatedRoute})
  }

  isSelected(feed){
    
    return feed.feedId == this.feedId;
  }

  bookMarkClass = 'fa fa-bookmark-o icons'
  onBookMark(event:any,id){
    console.log(id)
    this.bookMarkClass = event.target.checked ? 'fa fa-bookmark icons' : 'fa fa-bookmark-o icons';
    
  }

}
