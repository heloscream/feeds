import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { ArticleService } from './article.service';
import { ResponseHash } from './response.hash';
import { Article } from './article';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { TinymceComponent } from '../tinymce/tinymce.component';





@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  {
  constructor(private article_service: ArticleService,private router: Router){}
    private response: ResponseHash;
    private  article_status: string; 
    public   description:string;

    create_article(articleform: NgForm)  {        
        this.article_service.create_article({article: Object.assign(articleform.value,{status: this.article_status})}).subscribe(response => {
            this.response=response;
            if(response.status==200){
                this.router.navigate(['article-list',"article-creation"]);
            }
    });        
  }

  get(data){
    this.description = data;
  }

  onSubmit(data){ 
      console.log(data);       
        this.article_service.create_article({article: Object.assign(data,this.description,{status: this.article_status})}).subscribe(response => {
            this.response=response;
            if(response.status==200){
                this.router.navigate(['article-list',"article-creation"]);
            }
    });        
  }


}
