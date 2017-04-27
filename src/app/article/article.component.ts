import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { NgForm } from '@angular/forms';
import {DialogModule} from 'primeng/primeng';

import { Article} from './article';
import { ArticleService } from './article.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers:[ArticleService]
})
export class ArticleComponent implements OnInit {
  errorMgs :string;
  articles: Article[];
  display: boolean =false;
  
  constructor(private articleservice :ArticleService ){}
     ngOnInit() { this.getArticle(); }

      getArticle(){
         this.articleservice.getArticle().subscribe(
            articles => this.articles = articles,
            );
            error =>  this.errorMgs = <any>error
      }

  showDialog(){
    this.display = true;
  }

  ngSubmit(title:string, url:string, summary:string, description:string){
    if(!title){return;}
    this.articleservice.create_article(title,url,summary,description).subscribe(
       article=> this.articles.push(article),
      error => this.errorMgs = <any>error
     );

  }

}
