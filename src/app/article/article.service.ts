import { Injectable } from '@angular/core';
import {Response,Http, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Article } from './article';


@Injectable()
export class ArticleService{
    baseUrl = "http://localhost:3000/articles.json";
    constructor(private http: Http) {}

    // get Article
    getArticle():Observable<Article[]>{
      return this.http.get(this.baseUrl)
                       .map(this.extractData)
                       .catch(this.handleError);
    }
  //create article
    create_article(title:string, url:string,summary:string,description:string,published:boolean): Observable<Article>{
     let headers = new Headers({ 'Content-Type': 'application/json' });
     let options = new RequestOptions({ headers: headers });

     return this.http.post(this.baseUrl,{title,url,summary,description,published},options)
                            .map(this.extractData)
                            .catch(this.handleError);
    }
    
  // end created article
   private extractData(res: Response) {
     let body = res.json();
     return body || { };
   }

  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
