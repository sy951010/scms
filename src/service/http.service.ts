import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {

  constructor(
      private _http: Http,
  ) { }

  getData(){
    const that = this;
    const params = {jtStartIndex: 0, jtPageSize: 20, jtSorting: 'act_id DESC'};
    console.log(this._http.request('http://192.168.2.234/goshare2/admin/activityFrame/showList'));
    this._http.post('http://192.168.2.234/goshare2/admin/activityFrame/showList', JSON.stringify(params))
    .toPromise()
    .then(res => {
        console.log();
    })
    .catch(res => {
        console.log(res);
    })
  }

  handleSuccess(res: Response) {
      console.log(res);
    // let body = res["_body"];
    // if (body) {
    //  return {
    //  data: res.json().content || {},
    //  page: res.json().page || {},
    //  statusText: res.statusText,
    //  status: res.status,
    //  success: true
    //  }
    // }
    // else {
    //  return {
    //  statusText: res.statusText,
    //  status: res.status,
    //  success: true
    //  }
    }

}
