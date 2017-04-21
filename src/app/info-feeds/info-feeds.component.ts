import { Component, OnInit } from '@angular/core';
import { InfoFeedsService } from '../info-feeds/info-feeds.service';

@Component({
  selector: 'app-info-feeds',
  templateUrl: './info-feeds.component.html',
  styleUrls: ['./info-feeds.component.css']
})
export class InfoFeedsComponent implements OnInit {
public feeds: any

  constructor(private feedsService: InfoFeedsService) { 
    // recall api service
  
    setTimeout(() => {
       this.getfeeds()
    }, 180000);
  }

   // on load services

  ngOnInit() {
    this.getfeeds()
  }

  // api services
  getfeeds() {
    this.feedsService.getfeed().then((data: any) => {
      this.feeds = data["articles"];
    });
  }

}
