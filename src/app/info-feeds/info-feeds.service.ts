import { Injectable, Component } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()

export class InfoFeedsService {
    private newsapi = "http://kre-feed_dev.kreatio.info/?q=http://feeds.bbci.co.uk/news/world/rss.xml"
    private earthquakeapi = "http://www.seismi.org/api/eqs?limit=10&min_magnitude=6";
    private twitterfeeds = "http://kre-feed.mailfixx.com/?q=https://twitrss.me/twitter_user_to_rss/?user=timesofindia"
    
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

     gettwitfeeds(){
        return new Promise(resolve =>{
            this.http.get(this.twitterfeeds).subscribe((res:Response)=> {
                resolve(res.json())
            });
        })
    }

}