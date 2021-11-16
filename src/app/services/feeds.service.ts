import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class FeedsService {

  private feedDataUrl:string="assets/data/feedsData.json"

  private knowMoreUrl:string="assets/data/knowMore.json"

  constructor(private http:HttpClient) { }


  getFeedsData(){
    return this.http.get(this.feedDataUrl);
  }


  // getKnowMoreData():Observable<any>{
  //   return this.http.get<any>(this.knowMoreUrl);
  // }

  getKnowMoreData(){
    // let data: Observable<any> = this.http.get(this.knowMoreUrl);
    // data.subscribe(results =>{
    //   console.log(results);
    //   return results;
    // })
    return this.http.get(this.knowMoreUrl);
  }

  // getDetails(id){
  //   return this.http.get(this.knowMoreUrl)
  //     .pipe(map(res) => {
  //       return res.find((item) => (item.id === id));
  //     })
  // }

  // getKnowMoreDataById(id){
  //   this.knowMoreDataArr = this.getKnowMoreData()
  //   .subscribe(data => this.knowMoreDataArr = data )
  //   console.log(this.knowMoreDataArr)
  // }
}
