import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendDataService {


  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getData(url:string): Observable<any> {

    return this.http.get(this.dataUrl+url);

  }

  saveData(url : string, data: any): Observable<any> {
    // Replace 'data' with the object you want to send in the POST request
    console.log(url + "  " + data);
    return this.http.post(this.dataUrl + url, data);
  }
}
