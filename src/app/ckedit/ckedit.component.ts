import { Component, OnInit } from '@angular/core';
import { ArticleComponent} from '../article/article.component'


 @Component({
  selector: 'app-ckedit',
  templateUrl: './ckedit.component.html',
  styleUrls: ['./ckedit.component.css']
})
export class CkeditComponent implements OnInit {

  constructor(private articleservice:ArticleComponent) {
   }

  ngOnInit() {
    
  }

  onChange(content){
    this.articleservice.getdata(content)

  }

}
