import { Injectable, Inject } from '@angular/core';
import { Http, Response, RequestOptions, } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {

    constructor(
        private http: Http,
        private confirmServ: NzModalService,
        private router: Router
    ) { }
    check() {
        if (window.localStorage.getItem('token') && window.localStorage.getItem('auth')) {
            return {
                token: window.localStorage.getItem('token'),
                auth: window.localStorage.getItem('auth'),
            }
        } else {
            this.router.navigate(['/login']);
        }
    }

    login(
        account,
        password
    ) {
        var url = 'http://localhost/scms/api/login.php';
        return this.httpservice(url,
            {
                account: account,
                password: password
            },
        );
    }
    updataPwd(
        old: number,
        newPwd: number
    ) {
        var url = 'http://localhost/scms/api/updataPassword.php';
        return this.httpservice(url,
            {
                oldPwd: old,
                newPwd: newPwd
            },
        );
    }
    applicationList(sort: string, search: any) {
        var url = 'http://localhost/scms/api/applicationList.php';
        return this.httpservice(url, {
            sort: sort,
        }, search);
    }
    application(obj:any){
        var url = 'http://localhost/scms/api/application.php';
        let user_id = window.localStorage.getItem('token')
        obj['token'] = user_id       
        return this.httpservice(url, obj); 
    }
    contest(obj: any) {
        var url = 'http://localhost/scms/api/contest.php';
        return this.httpservice(url, obj);
    }
    contestList(sort: string, search: any) {
        var url = 'http://localhost/scms/api/contestList.php';
        return this.httpservice(url,
            {
                sort: sort,
            }, search
        );
    }
    contestMore(id: number) {
        var url = 'http://localhost/scms/api/contestMore.php';
        return this.httpservice(url,
            {
                id: id,
            },
        );
    }
    memberList(sort: string, search: any) {
        var url = 'http://localhost/scms/api/memberList.php';
        return this.httpservice(url,
            {
                sort: sort,
            }, search
        );
    }
    addmember(obj) {
        var url = 'http://localhost/scms/api/addMember.php';
        return this.httpservice(url, obj);
    }
    getMember(id: number) {
        var url = 'http://localhost/scms/api/memberMore.php';
        return this.httpservice(url,
            {
                id: id
            },
        );
    }
    updateMember(obj: number) {
        var url = 'http://localhost/scms/api/memberUpdate.php';
        return this.httpservice(url,{},obj
        );
    }
    getenum(url: string) {
        var url = 'http://localhost/scms/base/global.php';
        return this.httpservice(url, {}, );
    }
    public async exportexcl() {
        var url = 'http://localhost/scms/api/export.php';
        this._http(url).subscribe(res => {
            var blob = new Blob([res.json()], { type: "application/vnd.ms-excel" });
            var objectUrl = URL.createObjectURL(blob);
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.setAttribute('style', 'display:none');
            a.setAttribute('href', objectUrl);
            a.setAttribute('download', 'user');
            a.click();
            document.body.removeChild(a);
            //释放URL地址
            URL.revokeObjectURL(objectUrl);
        });
    }
    public async httpservice(url: string, params: any, search?: any): Promise<any> {
        
        if (search) {
            Object.assign(params, search);
        }
        if (url.indexOf('login')<0) {
            if (!window.localStorage.getItem('token')) {
                this.router.navigate(['/']);
            }
        }
        
        return await this.http.post(url, JSON.stringify(params))
            .map(e => this.handleSuccess(e))
            .catch(e => this.handleError(e))
            .toPromise();
    }
    public _http(url: string): any {
        return this.http.get(url, { responseType: 3 })
            .map(res => { return res });
    }
    public handleSuccess(res: Response) {
        let body = res.json();
        if (body) {
            return body;
        }
    }
    public handleError(res: Response) {
        return this.confirmServ.error({
            title: '错误',
            content: '服务器出错，请稍后再试'
        });
    }
}