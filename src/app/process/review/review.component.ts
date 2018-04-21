import { element } from 'protractor';
import { AppComponent } from './../../app.component';
import { Component, Inject, OnInit } from '@angular/core';
import { NzModalService, NzNotificationService } from 'ng-zorro-antd';
declare var Mock: any;
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.less']
})
export class ReviewComponent implements OnInit {
  public gameList = [];
  public awardList = [];
  public teaList = [];
  public Item = [];
  public searchbox = false;
  public Sorting1 = "account_id DESC";
  public Sorting2 = "contest_id DESC";
  
  public obj = {};
  constructor(
    @Inject('ApiService') private _api,
    private _app: AppComponent,
    private confirmServ: NzModalService,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.getGame();
    this.getTea();
    this.obj['radiovalue'] = 2;
  }
  getGame() {
    this._api.contestList(this.Sorting2).then(e => {
      this.gameList = e.data;
    })
  }
  getItem(id) {
    this.obj['item_id'] = null;
    for (let i = 0; i < this.gameList.length; i++) {
      const element = this.gameList[i];
      if (element.contest_id == id) {
        this.Item = element.item ? JSON.parse(element.item) : [{ key: -1, value: '无' }];
        this.awardList = element.award ? JSON.parse(element.award) : [{ key: -1, value: '无' }];
        this.obj['radiovalue'] = element.radiovalue;
      }
    }
  }
  getTea() {
    this._api.memberList(this.Sorting1).then(e => {
      this.teaList = e.data;
    })
  }
  put() {
    this.obj['token'] = window.localStorage.getItem('token');
    this._api.application(this.obj).then(e => {
      if (e.data) {
        this._notification.success('添加成功', '申请老师会受到你的通知', { nzDuration: 4000 });
        window.history.go(-1);
      }
    })
  }
}
