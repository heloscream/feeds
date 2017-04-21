import { Injectable, Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class InfoFeedsService {
    private url = " https://newsapi.org/v1/articles?source=the-times-of-india&sortBy=latest&apiKey=74f8fb23e1d648209272c9e9c03c6e2a"
    public feeds: any;
    constructor(private http: Http) { }

    getfeed() {
        return new Promise(resolve => {
            this.http.get(this.url)
                .subscribe((res: Response) => {
                    this.feeds = res.json();
                    resolve(this.feeds)
                });
        })

    }

}