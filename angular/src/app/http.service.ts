import { Injectable } from '@angular/core';
import { HttpClient, HttpXsrfTokenExtractor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http:HttpClient,
    ) { }
  public num = 0;
  private api = "http://localhost:8000";
  findJob(object){

    // object.headers = [
    //   { name: 'X-XSRF-TOKEN', value: this.xsrfService.getToken() }
    // ]
    return this.http.post(this.api + '/job', object);
  }
  getAllJobs(){
    return this.http.get(this.api + '/jobs');
  }
  getRelatedJobs(id){
    return this.http.get(this.api + '/jobs/' + id + this.num +'/positions');
  }
  submitLocation(i){
    this.num = i
  }
}
