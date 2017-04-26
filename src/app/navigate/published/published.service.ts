import { Injectable, Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Article} from './article'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()


export class PublishedService {
    private getarticle = "http://localhost:3000/articles"
    private Article;
    
    constructor(private http: Http) {
        
     }

     get(): Observable<Article[]>{
         return this.http.get(this.getarticle).map((response: Response) => response.json() as Article)
     
                    .catch(this.handleError);
  }
//   private extractData(res: Response) {
//     let body = res.json();
//     console.log(body)
//     return body.data || { };
//   }
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