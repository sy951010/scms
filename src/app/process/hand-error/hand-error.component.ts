import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NzNotificationService } from 'ng-zorro-antd';
const TitleList = ['ID', '提交人', '审批人', '批改时间', '拒绝原因'];
const sortList = [
  { label: '提交时间', value: 'op_time' },
]
const searchList = {
  kind: 1, // 搜索
  list: [
    { type: 0, value: { key: 'user_id', name: '提交人姓名' } },
    { type: 0, value: { key: 'teachId', name: '审批人姓名' } },
  ]
};
@Component({
  selector: 'app-hand-error',
  templateUrl: './hand-error.component.html',
  styleUrls: ['./hand-error.component.less']
})
export class HandErrorComponent implements OnInit {
  public TitleList = TitleList;
  public loading = false;
  public List = [];
  public sortList = sortList;  // 用于排序的字段
  public searchList = searchList;  // 用于排序的字段 
  public sortString = 'review_id ASC';
  public searchObj={};
  public all_user = {};
  constructor(
    @Inject('ApiService') private _api,
    private _app: AppComponent,
    private _notification: NzNotificationService   
  ) { }

  ngOnInit() {
    this.searchObj['status'] = -1;
    this.getData();
  }
  getData() {
    this.loading = true;
    this._api.errorList(this.sortString,this.searchObj).then(e=>{
      this.all_user = e.all_user;
      this.List = e.data;
      this.loading = false;
    })
  }
  reload(){
    this.searchObj = {};
    this.searchObj['status'] =-1;
    this.getData();
  }
  returnSortChecked(e) {
    this.sortString = `${e.key} ${e.value == 0 ? 'ASC' : 'DESC'}`;
    this.getData();
  }
  returnSearchChecked(e) {
    this.searchObj['user_id'] = e['user_id'] ? this.dataTran(e['user_id'], this.all_user) : null;
    this.searchObj['teachId'] = e['teachId'] ? this.dataTran(e['teachId'], this.all_user) : null;
    this.getData();
  }
  dataTran(str, Obj) {
    for (const key in Obj) {
      if (Obj[key] == str) {
        return key;
      }
    }
  }
}
