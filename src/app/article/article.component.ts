import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms' ;
import { Article} from './article';
import {DialogModule} from 'primeng/primeng';

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
