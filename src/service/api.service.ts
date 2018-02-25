import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
    constructor(
        private http: Http
    ) { }

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

    public async httpservice(url: string, params: any): Promise<any> {
        return await this.http.post(url, JSON.stringify(params))
            .map(e => this.handleSuccess(e))
            .toPromise();
    }
    public handleSuccess(res: Response) {
        let body = res.json();
        if (body) {
            return body;
        }
    }
}