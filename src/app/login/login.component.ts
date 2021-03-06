import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
    public user_name: string;
    public user_password: any;
    public valForm: FormGroup;
    public notice=false;

    constructor(
        @Inject('ApiService') private _api,
        private _route: Router,
    ) {

     }

    ngOnInit() {
    }

    login() {
        if (this.user_name&&this.user_password) {
            this._api.login(this.user_name, this.user_password).then(e => {
                if (e.status == 200) {
                    window.localStorage.setItem('token',e.data.account_id)
                    window.localStorage.setItem('name', e.data.name)                    
                    window.localStorage.setItem('auth', e.data.auth) 
                    window.localStorage.setItem('info',JSON.stringify(e.data))                   
                    this._route.navigate(['/index/notice'])
                } else {
                    this.notice = true;
                }
            }).catch(e=>console.log(e))
        }else{
            this.notice = false;
        }
        
    }
}
