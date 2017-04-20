import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms' ;
import { TinymceComponent } from '../tinymce/tinymce.component';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent  {

  clicks: number = 0;

    count() {
        this.clicks++;
    }

}
