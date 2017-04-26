import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { Article} from './article';
import {DialogModule} from 'primeng/primeng';
import { ArticleService } from './article.service';
import { ResponseHash } from './response.hash';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';





@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  {
  article :any;
  content : string;
  display: boolean =false;

  constructor(){
    console.log(this.article)
// =======
//   constructor(private article_service: ArticleService,private router: Router){}
//     private response: ResponseHash;
//     private  article_status: string; 
//     public   description:string;

//     create_article(articleform: NgForm)  {        
//         this.article_service.create_article({article: Object.assign(articleform.value,{status: this.article_status})}).subscribe(response => {
//             this.response=response;
//             if(response.status==200){
//                 this.router.navigate(['article-list',"article-creation"]);
//             }
//     });        
//   }

//   get(data){
//     this.description = data;
//   }

//   onSubmit(data){ 
//       console.log(data);       
//         this.article_service.create_article({article: Object.assign(data,this.description,{status: this.article_status})}).subscribe(response => {
//             this.response=response;
//             if(response.status==200){
//                 this.router.navigate(['article-list',"article-creation"]);
//             }
//     });        
// >>>>>>> 92cc4636ee5b777a7e8c72c085eafdcade84a5c0
  }

getdata(data){
  // console.log(data)
  this.content=data;
}

showDialog(){
  this.display = true;
}




onSubmit(data){
  console.log(data)
}
}
