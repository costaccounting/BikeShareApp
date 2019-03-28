import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetDistService {
    lat1 = 0;
    lat2 = 0;
    lng1 = 0;
    lng2 = 0;
    theta = 0;
    dist = 0;
    
    
  constructor() { }
  
  calc(l1, lg1, l2, lg2): number{
        this.lat1 = l1;
        this.lat2 = l2;
        this.lng1 = lg1;
        this.lng2 = lg2;
        var radlat1 = 3.14159265359*(this.lat1)/180;
	   var radlat2 = 3.14159265359*(this.lat2)/180;
	var radtheta = 3.14159265359*(this.theta)/180;
        var theta = this.lng1-this.lng2;
        this.dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (this.dist > 1) {
			this.dist = 1;
		}
        
		this.dist = Math.acos(this.dist);
		this.dist = this.dist * 180/Math.PI;
		this.dist = this.dist * 60 * 1.1515;
		this.dist = this.dist * 1.609344 
        
		return this.dist;
        }     
  
  d2r( deg: number){
    return Math.PI*deg /180;
  }
}
