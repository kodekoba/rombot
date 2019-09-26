import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  job = {title:"", location:""}
  constructor(
    private http:HttpService,
    private router:Router
    ) { }

  ngOnInit() {
  }
  submitForm(){
    let observable = this.http.findJob(this.job);
    observable.subscribe(data => {
      console.log(data);
      this.router.navigate(['/jobs'])
    })
  }
}
