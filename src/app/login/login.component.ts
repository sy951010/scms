import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    public user_name: string;
    public user_password: any;

    constructor(
        @Inject('ApiService') private _api,
        private _route: Router,
    ) { }

    ngOnInit() {
    }

    login() {
        this._api.login(this.user_name,this.user_password).then(e=>{
            if (e.status == 200) {
                this._route.navigate(['/index/notice'])
            } else {
                window.alert('账号密码错误')
            }
        })
    }
}
