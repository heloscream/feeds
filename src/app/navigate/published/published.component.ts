import { Component, OnInit } from '@angular/core';
import {ArticleService } from '../../article/article.service';
import { Article} from '../../article/article'; 
import {PublishedService} from '../published/published.service';

@Component({
  selector: 'app-published',
  templateUrl: './published.component.html',
  styleUrls: ['./published.component.css'],
  providers:[ArticleService,PublishedService]
})
export class PublishedComponent implements OnInit {
  articles:Article[];
  errorMgs: string;
  search:string;


  constructor(private articleservice:ArticleService, private publishedservice:PublishedService) { }


  ngOnInit() {
  this.articleservice.getArticle()
                   .subscribe( articles => this.articles = articles,);
                  
                    error =>  this.errorMgs = <any>error

                    //  console.log(this.articles)
                  
  }

  searcharticles(search:string){
    console.log(search)
    this.publishedservice.search(search).subscribe(
       articles => this.articles = articles,
            );
            error =>  this.errorMgs = <any>error
  }


}
  

  



