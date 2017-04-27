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

  // display: boolean =false;
  constructor(private articleservice :ArticleService ){}
     ngOnInit() { this.getArticle(); }

      getArticle(){
         this.articleservice.getArticle().subscribe(
            articles => this.articles = articles,
            );
            error =>  this.errorMgs = <any>error
      }

  // showDialog(){
  //   this.display = true;
  // }

  // onSubmit(title:string, url:string, description:string, content:string){
  //   console.log("This   s"+title);
  // }
  addArticle(title:string, url:string, description:string, content:string){
    if(!title){return;}
    this.articleservice.create_article(title,url,description,content).subscribe(
       article=> this.articles.push(article),
      error => this.errorMgs = <any>error
     );

  }

}
