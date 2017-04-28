import {Injectable} from '@angular/core';
import {Response,Http, Headers,RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()


export class PublishedService {
// url ="http://localhost:3000/articles/search?search=search"

constructor(private http:Http){}
    search(search:string) {
       return this.http.get(`http://localhost:3000/articles/search?search=${search}`).map(this.extractData).catch(this.handleError)

    }

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
