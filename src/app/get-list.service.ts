import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetListService {

  constructor(private http: HttpClient) { 
  
  }
  getJSON(){
    return this.http.get("./assets/bikeshare.json");
  }
}
