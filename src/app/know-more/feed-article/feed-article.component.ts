
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FeedsService } from 'src/app/services/feeds.service';
import { KnowMore } from 'src/assets/interface/KnowMore';

@Component({
  selector: 'app-feed-article',
  templateUrl: './feed-article.component.html',
  styleUrls: ['../know-more.component.css']
})
export class FeedArticleComponent implements OnInit {



  constructor(
    private activatedRoute:ActivatedRoute, 
    private knowMoreService:FeedsService,
    private router:Router
    ) {
      
   }  
   feed:any;
   public feedId;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.feedId = id;
    })
    console.log(this.feedId)
    this.knowMoreService.getKnowMoreData()
    .subscribe((response:KnowMore[]) => {

      this.feed = response.find((f:KnowMore) => f.feedId == this.feedId) 
      console.log(this.feed)
    })

  }

  goPrevious(){
    let previousId = this.feedId-1;
    this.router.navigate(['/feeds',{id:previousId}])
  }
  goNext(){
    let nextId = this.feedId+1;
    this.router.navigate(['/feeds',{id:nextId}])
  }

  gotoHome(){
    let selectedId = this.feedId ? this.feedId : null;
    // this.router.navigate(['/employees',{id:selectedId}])
    this.router.navigate(['../',{id:selectedId}],{relativeTo:this.activatedRoute})
  }
  // fetchJsonData(){
  //   this.http.get("assets/data/knowMore.json")
  //   .subscribe((data) => {
  //     this.feed = data as any[]
  //     console.log(this.feed)
  //   })
  // }
  // getPost(){
  // }

}
