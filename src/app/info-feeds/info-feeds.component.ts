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
  public earthquakes: any;
  public twitfeeds: any;
  public sensex: any;

  // google maps zoom level
  zoom: number = 2;
  // initial center position for the map

  lat: number = -19.645929;
  lng: number = 152.696876;
  constructor(private feedsService: InfoFeedsService) { }

  // on load services

  ngOnInit() {
    this.getnewsfeeds();
    this.geteqsreport();
    this.gettwitfeeds();
    this.getsensexreport();
  }
  getnewsfeeds() {
    this.feedsService.getfeed().then((data: any) => {
      if (data["responseStatus"] == "200") {
        this.feeds = data["responseData"]["feed"]["entries"]
      }
      setTimeout(() => {
        this.getnewsfeeds();
      }, 600000);
    });
  }

  geteqsreport() {
    this.feedsService.geteqs().then((data: any) => {
      this.earthquakes = data["earthquakes"]
      for (var i = 0; i < data["earthquakes"].length; i++) {
        this.earthquakes[i].lat = +data["earthquakes"][i].lat;
        this.earthquakes[i].lon = +data["earthquakes"][i].lon;
      }
      setTimeout(() => {
        this.geteqsreport();
      }, 600000);

    })
  }

  gettwitfeeds() {
    this.feedsService.gettwitfeeds().then((data: any) => {
      if (data["responseStatus"] == "200") {
        this.twitfeeds = data["responseData"]["feed"]["entries"];
        setTimeout(() => {
          this.gettwitfeeds();
        }, 6000);
      }
    });
  }

  getsensexreport() {
    this.feedsService.getsensex().then((data: any) => {
      if (data["responseStatus"] == "200") {
        this.sensex = data["responseData"]["feed"]["entries"];
       }
      setTimeout(() => {
        this.getsensexreport();
      }, 80000);
    });
  }

}
