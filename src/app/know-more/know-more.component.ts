import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-know-more',
  templateUrl: './know-more.component.html',
  styleUrls: ['./know-more.component.css']
})
export class KnowMoreComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute,
    private router:Router
    ) { }

  public feedId:number ;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.feedId = id;
    })
  }
  
  // goPrevious(){
  //   let previousId = this.feedId-1;
  //   this.router.navigate(['./',{id:previousId}],{relativeTo:this.activatedRoute})
  // }
  // goNext(){
  //   let nextId = this.feedId+1;
  //   this.router.navigate(['./',{id:nextId}],{relativeTo:this.activatedRoute})
  // }
}
