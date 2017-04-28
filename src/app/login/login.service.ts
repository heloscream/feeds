import { Injectable, Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';



@Injectable()
export class LoginService {
    public email: string;
    public password: string;
    private url = "http://localhost:9090/profiles";
    data: any;
    constructor(private http: Http) { }
    getUsers() {
        return new Promise(resolve => {
            this.http.get(this.url)
                .subscribe((res: Response) => {
                    this.data = res.json();
                    resolve(this.data)
                });
        })
    }

    login(email, password) {
        return new Promise(resolve => {
            let index = this.data.findIndex(loginDetails => loginDetails.email === email);
            if (index >= 0 && email == this.data[index].email && password == this.data[index].password) {
                status = 'true';
                resolve(status);
            } else {
                status = 'false';
                resolve(status);
            }
        })

    }

}
