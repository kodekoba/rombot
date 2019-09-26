import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {
  relatedJobs:any;
  constructor(
    private http:HttpService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getRelatedJobs();
  }
  getRelatedJobs(){
    let observable = this.http.getRelatedJobs(this.route.snapshot.params.id);
    observable.subscribe(data => {
      console.log(data);
      this.relatedJobs = data;
      for(let i = 0; i < this.relatedJobs.length; i++){
        //takes out html tags in string regex from stack overflow
        this.relatedJobs[i].description = this.relatedJobs[i].description.replace(/<\/?[^>]+(>|$)/g, "");
      }
    })
  }
  showThis(x){
    let obj = document.getElementById('myid' + x)
    for(let i = 0; i < this.relatedJobs.length; i++){
      if(i == x){
        obj.classList.add('show')
      } else {
        document.getElementById('myid' + i).classList.remove('show')
      }
    }
  }

}
