import { Component, OnInit } from '@angular/core';
import { ButtonModule, Message } from 'primeng/primeng';
import { Router } from '@angular/router';
import { LoginService } from './login.service'

@Component({
    selector: 'login-app',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers:[LoginService]
})

export class LoginComponent {
    public email: string;
    public password: string;
    msgs: Message[] = [];
    getMyCarsFromServer: string;

    constructor(private router: Router, private loginservice: LoginService) { }

    ngOnInit() {
        this.loginservice.getUsers();
    }

    login() {
        this.loginservice.login(this.email, this.password).then(() => {
            if (status == 'true') {
                this.router.navigate(['/header']);
            } else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: 'Invalid login credentials', detail: 'Please check your credentials' });
                this.router.navigate(['']);
            }
        });
    }
}

