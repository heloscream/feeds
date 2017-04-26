import { Injectable } from '@angular/core';
import {Response} from '@angular/http';

import { Http,Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Article } from './article';
import 'rxjs/add/operator/map';
import {ResponseHash} from './response.hash';


@Injectable()


export class ArticleService{
  articles;
    baseUrl = "http://localhost:3000/articles.json";
   

    constructor(private http: Http) {
    }
    private headers = new Headers({'Content-Type': 'application/json'});

    

     
    // }
    create_articles(){
        return new Promise(resolve => {
        this.http.get(this.baseUrl)
        .subscribe((res: Response) => {
        resolve(res.json())
        console.log("test")
        console.log(res.json());
        });
    })
    }
create_article(form_params): Observable<ResponseHash>{        
        return this.http.post(this.baseUrl,form_params,this.headers).map(response=>response.json() as ResponseHash);
    }


}

