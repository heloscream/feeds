import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { NgForm } from '@angular/forms';
import {DialogModule} from 'primeng/primeng';

import { Article} from './article';
import { ArticleService } from './article.service';
import { Router } from '@angular/router';


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
  
  constructor(private articleservice :ArticleService ,private router: Router){}
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

  ngSubmit(title:string, url:string, summary:string, description:string,published:boolean){
    if(!title){return;}
    this.articleservice.create_article(title,url,summary,JSON.stringify(description), published).subscribe(
       article=> this.articles.push(article),
      error => this.errorMgs = <any>error,
     );
     if(!this.errorMgs){
     this.getArticle()
     this.router.navigate(['/published']);
     }
  }

}
