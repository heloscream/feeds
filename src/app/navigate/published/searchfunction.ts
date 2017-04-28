import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import {ArticleService } from '../../article/article.service';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

  constructor(private jsonp: Jsonp, private searching: ArticleService) {}
  search (term: string) {

     let Url = 'http://localhost:3000/articles.json';
     let params = new URLSearchParams();
     params.set('search', term); // the user's search value
     console.log(params.set('search', term))
     params.set('action', 'opensearch');
     params.set('format', 'json');
     params.set('callback', 'JSONP_CALLBACK');

     // : Add error handling
     return this.jsonp
                .get(Url, { search: params })
                .map(response => <string[]> response.json()[1]);
   }
}
