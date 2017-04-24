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
public twitfeeds:any;
 
  // google maps zoom level
    zoom: number = 2;
  // initial center position for the map
  


  lat: number = -19.645929;
  lng: number =  152.696876;
  constructor(private feedsService: InfoFeedsService) { 
    // recall api services
  
    setTimeout(() => {
       this.getnewsfeeds();
       this.geteqsreport();
    }, 180000);


    setTimeout(() => {
       this.gettwitfeeds();
    }, 60000);
  }

   // on load services

  ngOnInit() {
    this.getnewsfeeds();
    this.geteqsreport();
    this.gettwitfeeds();
  }

  // api services using thrid party
  // getnewsfeeds() {
  //   this.feedsService.getfeed().then((data: any) => {
  //     this.feeds = data["articles"];
  //   });
  // }

// using rss feeds
  getnewsfeeds() {
    this.feedsService.getfeed().then((data: any) => {
      if(data["responseStatus"]== "200"){
      this.feeds = data["responseData"]["feed"]["entries"]
      }
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

  gettwitfeeds() {
    this.feedsService.gettwitfeeds().then((data: any) => {
      console.log(data["responseStatus"])
      if(data["responseStatus"]== "200"){
      this.twitfeeds = data["responseData"]["feed"]["entries"];
      // console.log(JSON.stringify(this.twitfeeds.content) )
      }
    });
  }

}
