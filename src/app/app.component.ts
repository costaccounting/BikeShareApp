import { Component, OnInit } from '@angular/core';
import { GetListService } from './get-list.service';
import { GetDistService } from './get-dist.service';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';


@Component({
  selector: 'app-root',
  providers: [GetListService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BikeShare';
  bikedata: any = [];
  show: boolean = false;
  infoWindow : any = '';
  maxDist = 0.5;
  minDock = 10;
  minBike = 10;
  mylat = 43.658532;
  mylng = -79.380176;
  
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  mapProp;
  marker;
  
  constructor( private getbikedata: GetListService, private getDist: GetDistService ) {}
  ngOnInit() {
        console.log(this.mylng);
        this.getbikedata.getJSON().subscribe(
			data => { 
				this.bikedata = data as string []; 
        
			},
			err => { 
				console.log('Error'); 
			},
			() => { 
				//console.log(this.bikedata); 
        }
		
        ); 
		this.mapProp = {
			center: new google.maps.LatLng(this.mylat,this.mylng),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
  }
  getMyLocation(){
    navigator.geolocation.getCurrentPosition( pos => {
        this.mylng =+ pos.coords.longitude;
        this.mylat =+ pos.coords.latitude;
      });
      console.log(this.mylng);
  }
  findLarge(){
        this.mapProp = {
			center: new google.maps.LatLng(this.mylat,this.mylng),
			zoom: 13,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
        
	  
	  for(var i=0; i<this.bikedata.stationBeanList.length ; i++){
            
		  var loc = this.bikedata.stationBeanList[i];
		  if( loc.totalDocks >= this.minDock ){
              
              console.log(loc.stationName + " " + this.getDist.calc(loc.latitude, loc.longitude, this.mylat, this.mylng) + " " + this.maxDist + this.minDock);
              
			  this.marker = new google.maps.Marker({
				position: new google.maps.LatLng( loc.latitude, loc.longitude),
				map: this.map
				});
			  
		  }
	  }
	  
  }
  findDocks(){
    this.mapProp = {
			center: new google.maps.LatLng(this.mylat,this.mylng),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
     
    for(var i=0; i<this.bikedata.stationBeanList.length ; i++){
		  var loc = this.bikedata.stationBeanList[i];
          console.log(loc.stationName + " " + this.getDist.calc(loc.latitude, loc.longitude, this.mylat, this.mylng));
          
		  if( this.getDist.calc(loc.latitude, loc.longitude, this.mylat, this.mylng) < this.maxDist ){
			  if(loc.availableDocks >= this.minDock){
                
                console.log(this.getDist.calc(loc.latitude, loc.longitude, this.mylat, this.mylng) + " " + this.maxDist);
                
                this.marker = new google.maps.Marker({
				position: new google.maps.LatLng( loc.latitude, loc.longitude),
				map: this.map
				});
              
              }
		  }
	  }
  }
  
  findBikes(){
    this.mapProp = {
			center: new google.maps.LatLng(this.mylat,this.mylng),
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		};
		this.map = new google.maps.Map(this.gmapElement.nativeElement, this.mapProp);
    for(var i=0; i<this.bikedata.stationBeanList.length ; i++){
		  var loc = this.bikedata.stationBeanList[i];
          console.log(loc.stationName + " " + this.getDist.calc(loc.latitude, loc.longitude, this.mylat, this.mylng));
          
		  if( this.getDist.calc(loc.latitude, loc.longitude, this.mylat, this.mylng) < this.maxDist ){
			  if(loc.availableDocks >= this.minBike){
              
                console.log(loc.stationName + " " + this.getDist.calc(loc.latitude, loc.longitude, this.mylat, this.mylng) + " " + this.maxDist + this.minDock);
                
                this.marker = new google.maps.Marker({
				position: new google.maps.LatLng( loc.latitude, loc.longitude),
				map: this.map
				});              
              }
		  }
	  }
	  
  }
  
}
	