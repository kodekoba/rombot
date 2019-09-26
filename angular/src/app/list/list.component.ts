import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allJobs:any;
  constructor(
    private http:HttpService,
    private router:Router
  ) { }

  ngOnInit() {
    this.getAllJobs();
  }
  getAllJobs(){
    let observable = this.http.getAllJobs();
    observable.subscribe(data => {
      console.log(data);
      this.allJobs = data;
    })
  }
  submitLocation(x, i){
    this.http.submitLocation(i);
    this.router.navigate(['/jobs', x.title_id, 'positions'])
  }
}
