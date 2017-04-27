import { Component, OnInit } from '@angular/core';
import {ArticleService } from '../../article/article.service';
import { Article} from '../../article/article'; 

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css'],
  providers:[ArticleService]
})
export class PublishedComponent implements OnInit {
  articles:Article[];
  errorMgs: string;


  constructor(private publishedservice:ArticleService) { }


  ngOnInit() {
  this.publishedservice.getArticle()
                   .subscribe( articles => this.articles = articles,);
                    error =>  this.errorMgs = <any>error
                  
  }

  



}
