import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';
const TitleList = ['#','竞赛名称', '级别', '类型', '申报截止日期',  '状态', '创建人'];
declare var Mock: any;
const sortList = [
  { label: 'ID', value: 'contest_id' }, 
  { label: '级别', value: 'garde' }, 
  { label: '截止日期', value: 'endtime' }, 
];
const searchList = {
  kind: 1, // 搜索
  list: [
    { type: 0, value: { key: 'contest_id', name: '竞赛Id' } },
  ]
};
@Component({
  selector: 'app-contest-more',
  templateUrl: './contest-more.component.html',
  styleUrls: ['./contest-more.component.less']
})
export class ContestMoreComponent implements OnInit {
  public TitleList = TitleList; // 标题列表
  public sortList = sortList;  // 用于排序的字段
  public searchList = searchList;  // 用于排序的字段 
  public searchObj = {};
  public memberList = [];  // 用户列表
  public loading: boolean;  // 加载动画
  public TotalRecordCount: number; // 数据总条目
  public Sorting = 'contest_id DESC' // 默认按id倒序
  public enum={};
  constructor(
    @Inject('ApiService') private _api,
    private _app: AppComponent,
  ) { }

  ngOnInit() {
    this._api.getenum().then(e=>{
      this.enum = e;
      this.getData();      
    })
  }

  getData() {
    this.loading = true;
    this._api.contestList(this.Sorting, this.searchObj).then(e => {
      this.memberList = e.data;
      this.TotalRecordCount = this.memberList.length;
    })
    this.loading = false;
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
  downLoad() {
    location.href = 'http://localhost/scms/api/export.php';
  }
}
