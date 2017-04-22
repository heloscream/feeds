import { Injectable, Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class InfoFeedsService {
    private newsapi = " https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey=74f8fb23e1d648209272c9e9c03c6e2a"
    private earthquakeapi = "http://www.seismi.org/api/eqs?limit=10&min_magnitude=6";
    
    constructor(private http: Http) {
        
     }

    getfeed() {
        return new Promise(resolve => {
            this.http.get(this.newsapi)
                .subscribe((res: Response) => {
                    resolve(res.json())
                });
        })

    }

    geteqs(){
        return new Promise(resolve =>{
            this.http.get(this.earthquakeapi).subscribe((res:Response)=> {
                resolve(res.json())
            });
        })
    }

}