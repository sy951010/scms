import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Mock } from 'mockjs';
const TitleList = ['用户ID', '姓名', '联系电话', '学校', '院系', '专业', '现住址'];
const sortList = [
    { label: '用户ID', value: 'account_id' }, 
    { label: '学校', value: 'school' }, 
    { label: '最近登录时间', value: 'user_last_login' }, 
    { label: '注册时间', value: 'user_create_time' }];
const searchList = {
    kind: 1, // 搜索
    list: [
        { type: 0, value: { key: 'account_id', name: '用户ID' } },
        { type: 0, value: { key: 'mobile', name: '用户手机号' } },
        { type: 0, value: { key: 'school', name: '学校' } },
    ]
};
import {
    Component,
    OnInit,
    Inject
} from '@angular/core';

declare var Mock: any;

@Component({
    selector: 'app-member',
    templateUrl: './member.component.html',
    styleUrls: ['./member.component.less']
})
export class MemberComponent implements OnInit {
    public TitleList = TitleList; // 标题列表
    public sortList = sortList;  // 用于排序的字段
    public searchList = searchList;  // 用于排序的字段 
    public searchObj = {};   
    public memberList = [];  // 用户列表
    public loading: boolean;  // 加载动画
    public TotalRecordCount: number; // 数据总条目
    public Sorting = 'account_id DESC' // 默认按id倒序
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
        this._api.memberList(this.Sorting,this.searchObj).then(e=>{
            this.memberList = e.data;
            this.TotalRecordCount = this.memberList.length;
        })
        this.loading = false;
    }
    reload(){
        this.searchObj = null;
        this.getData();
    }
    returnSortChecked(e) {
        this.Sorting = `${e.key} ${e.value == 0 ? 'ASC' :'DESC'}`;
        this.getData();
    }
    returnSearchChecked(e){
        this.searchObj = e;
        this.getData();
    }
    downLoad(){
        location.href = 'http://localhost/scms/api/export.php';
    }
}
