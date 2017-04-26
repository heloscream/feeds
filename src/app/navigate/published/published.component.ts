import { Component, OnInit } from '@angular/core';
import {PublishedService } from '../published/published.service';
import { Article} from './article'; 

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css'],
  providers:[PublishedService]
})
export class PublishedComponent implements OnInit {
  articles:Article[];
  errorMessage: string;

  constructor(private publishedservice:PublishedService) { }


  ngOnInit() {
  this.publishedservice.get()
                   .subscribe(articles => this.articles = articles);
                  
  }

  



}
