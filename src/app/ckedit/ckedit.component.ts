import { Component, OnInit } from '@angular/core';
import { ArticleComponent} from '../article/article.component'

 @Component({
  selector: 'app-ckedit',
  templateUrl: './ckedit.component.html',
  styleUrls: ['./ckedit.component.css']
})
export class CkeditComponent implements OnInit {

  constructor(private articleservice:ArticleComponent) {
// =======
//   constructor(private ArticleComponent:ArticleComponent) {
// >>>>>>> 92cc4636ee5b777a7e8c72c085eafdcade84a5c0
   }

  ngOnInit() {

  }

  // onChange(content){
  //   this.articleservice.getdata(content)
  //
  // }

  // onChange(data){
  //   this.ArticleComponent.get(data);
  // }

}
