import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FeedsService } from 'src/app/services/feeds.service';

@Component({
  selector: 'app-aside-articles',
  templateUrl: './aside-articles.component.html',
  styleUrls: ['../know-more.component.css']
})
export class AsideArticlesComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute, 
    private feedService:FeedsService,
    private router:Router

  ) { }
  asideFeeds:any;
  feedId:number;
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.feedId = id;
    })

    this.feedService.getFeedsData()
    .subscribe((response) => {

      this.asideFeeds = response;
      console.log(this.asideFeeds)
    })
  }

  onSelect(feed){
    this.router.navigate(['./',{id:feed.feedId}],{relativeTo:this.activatedRoute})
  }


}
