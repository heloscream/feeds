import { Component, OnInit } from '@angular/core';
import { InfoFeedsService } from '../info-feeds/info-feeds.service';
import { AgmCoreModule } from 'angular2-google-maps/core';


@Component({
  selector: 'app-info-feeds',
  templateUrl: './info-feeds.component.html',
  styleUrls: ['./info-feeds.component.css']
})
export class InfoFeedsComponent implements OnInit {
public feeds: any;
public earthquakes : any;
  // google maps zoom level
    zoom: number = 2;
  // initial center position for the map
  lat: number = 37.090240;
  lng: number = 80.156250;
  constructor(private feedsService: InfoFeedsService) { 
    // recall api services
  
    setTimeout(() => {
       this.getnewsfeeds();
       this.geteqsreport();
    }, 180000);
  }

   // on load services

  ngOnInit() {
    this.getnewsfeeds();
    this.geteqsreport();
  }

  // api services
  getnewsfeeds() {
    this.feedsService.getfeed().then((data: any) => {
      this.feeds = data["articles"];
    });
  }

  //  earthquake api

  geteqsreport(){
    this.feedsService.geteqs().then((data:any)=> {
      this.earthquakes =data["earthquakes"]
      for(var i=0;i<=data["earthquakes"].length;i++){
        this.earthquakes[i].lat = +data["earthquakes"][i].lat;
        this.earthquakes[i].lon = +data["earthquakes"][i].lon;
      }
    })
  }

}
