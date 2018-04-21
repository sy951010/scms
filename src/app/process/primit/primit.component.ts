import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';
declare var Mock: any;
const TitleList = ['ID','竞赛名称', '级别', '提交人', '提交时间', '状态', '修改人'];

@Component({
  selector: 'app-primit',
  templateUrl: './primit.component.html',
  styleUrls: ['./primit.component.less']
})
export class PrimitComponent implements OnInit {
  public TitleList = TitleList; // 标题列表
  // public sortList = sortList;  // 用于排序的字段
  // public searchList = searchList;  // 用于排序的字段 
  public searchObj = {};
  public memberList = [];  // 用户列表
  public loading: boolean;  // 加载动画
  public TotalRecordCount: number; // 数据总条目
  public Sorting = 'app_id DESC' // 默认按id倒序
  public all_user = {};
  public searchbox = false; // 搜索弹框显示隐藏
  constructor(
    @Inject('ApiService') private _api,
    private _app: AppComponent,
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData() {
    this.loading = true;
    this._api.applicationList(this.Sorting, this.searchObj).then(e => {
      this.memberList = e.data;
      this.all_user = e.all_user;
      this.TotalRecordCount = this.memberList.length;
      this.loading = false;
    })
  }
  reload() {
    this.searchObj = null;
    this.getData();
  }
  returnSortChecked(e) {
    this.Sorting = `${e.key} ${e.value == 0 ? 'ASC' : 'DESC'}`;
    this.getData();
  }
  returnSearchChecked(e) {
    this.searchObj = e;
    this.getData();
  }
}
