import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';
import { NzNotificationService } from 'ng-zorro-antd';
declare var Mock: any;
const TitleList = ['ID','竞赛名称', '级别', '提交人', '提交时间', '状态', '审批人'];
const sortList = [
  { label: 'ID', value: 'app_id' },
  { label: '状态', value: 'status' },
  { label: '提交时间', value: 'time' },
]
const searchList = {
  kind: 1, // 搜索
  list: [
    { type: 0, value: { key: 'user_id', name: '提交人姓名' } },
    { type: 0, value: { key: 'game_name', name: '竞赛名称' } },
  ]
};
@Component({
  selector: 'app-primit',
  templateUrl: './primit.component.html',
  styleUrls: ['./primit.component.less']
})
export class PrimitComponent implements OnInit {
  public TitleList = TitleList; // 标题列表
  public sortList = sortList;  // 用于排序的字段
  public searchList = searchList;  // 用于排序的字段 
  public searchObj = {};
  public memberList = [];  // 用户列表
  public loading: boolean;  // 加载动画
  public TotalRecordCount: number; // 数据总条目
  public Sorting = 'app_id DESC' // 默认按id倒序
  public all_user = {};
  public all_game ={} ;
  public searchbox = false; // 搜索弹框显示隐藏
  public all_item={};
  public rejectObj={};
  constructor(
    @Inject('ApiService') private _api,
    private _route:Router,
    private _routeInfo: ActivatedRoute,
    private _app: AppComponent,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    this.searchObj['app_id'] = this._routeInfo.snapshot.queryParams['appli_id'];
    this._api.getenum().then(e=>{
      this.getData();
    })
  }
  getData() {
    this.loading = true;
    this._api.applicationList(this.Sorting, this.searchObj).then(e => {
      this.memberList = e.data;
      this.all_user = e.all_user;
      this.all_game = e.all_game;
      this.all_item = e.all_item;
      this.TotalRecordCount = this.memberList.length;
      this.loading = false;
    })
  }
  reload() {
    this.searchObj = null;
    this.Sorting = 'app_id DESC';
    this.getData();
  }
  teacher(){
    this.searchObj = {};
    this.searchObj['teacher'] = window.localStorage.getItem('token');
    this.getData();
  }
  returnSortChecked(e) {
    this.Sorting = `${e.key} ${e.value == 0 ? 'ASC' : 'DESC'}`;
    this.getData();
  }
  returnSearchChecked(e) {
    this.searchObj['user_id'] = e['user_id'] ? this.dataTran(e['user_id'],this.all_user):null;
    this.searchObj['game_name'] = e['game_name'] ? this.dataTran(e['game_name'], this.all_game) : null;
    this.getData();
  }
  primt(i,status){
    if (i.teacher!=window.localStorage.getItem('token')) {
      this._notification.error('操作失败', '当前用户非指定教师',{ nzDuration:4000});
      return;
    }
    this._api.review(i.app_id,status).then(e=>{
      if (e.data) {
        this._notification.success('操作成功', '稍后会通知该学生', { nzDuration:4000});
        this.getData();
        if (status==-1) {
          return
        }
        this._api.aduited(i['teacher'],i['user_id'], i['app_id'], 1, '');
      }else{
        this._notification.error('操作失败', '', { nzDuration: 4000 });
      }
    })
  }
  reject(i){
    this.rejectObj = i;
    this.searchbox = true;
  }
  handleOk(e){
    this.searchbox = false;
    this.primt(this.rejectObj,-1);
    this._api.aduited(this.rejectObj['teacher'],this.rejectObj['user_id'],this.rejectObj['app_id'],-1,e).then(e=>{

    })
  }
  getItem(id,i){
    if (i==-1) {
      return '无'
    }else{
      let arr = this.all_item[id]? JSON.parse(this.all_item[id]):[];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].key == i) {
          return arr[j].value;
        }
      }
    }
  }
  goto(i){
    this._route.navigate(['index/review'],{queryParams:{id:JSON.stringify(i)}});
  }
  dataTran(str,Obj){
    for (const key in Obj) {
      if (Obj[key]==str) {
        return key;
      }
    }
  }
}
