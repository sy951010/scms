import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Mock } from 'mockjs';
const TitleList = ['用户ID', '钱包金额', '手机', '最近登录时间', '注册时间', '来源', '平台', '注册信息', '操作'];
const sortList = [{ label: '用户ID', value: 'user_id' }, { label: '钱包金额', value: 'user_wallet' }, { label: '最近登录时间', value: 'user_last_login' }, { label: '注册时间', value: 'user_create_time' }];
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
    public memberList = [];  // 用户列表
    public pageIndex: number = 1; // 分页页码
    public pageSize: number = 20; // 分页条目
    public loading: boolean;  // 加载动画
    public TotalRecordCount: number; // 数据总条目
    public Sorting = 'user_id DESC' // 默认按id倒序
    public searchbox = false; // 搜索弹框显示隐藏
    public source: any; //
    public sourceOption: any;
    public platform: any; //
    public platformOption: any;
    public uid: number;
    public tel: number;
    public creat: any;
    public login: any;
    constructor(
        @Inject('ApiService') private _api,
        private _app: AppComponent,
    ) { }

    ngOnInit() {
        var data = Mock.mock({
            // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
            'list|1-10': [{
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                'id|+1': 1
            }]
        });
        console.log(data);
        this.loading = true;
        this.sourceOption = [
            'focus',
            'asdhfj',
            'asdhf',
            'asdhfj'
        ];
        this._api.getList(0, 20, this.Sorting).then(e => {
            // this.memberList = e.Records;
            // this.TotalRecordCount = e.TotalRecordCount;
            console.log(e);
            this.loading = false;
        });
    }
    getData() {
        this.loading = true;
        this._api.getList((this.pageIndex - 1) * this.pageSize, this.pageSize, this.Sorting).then(e => {
            this.memberList = e.Records;
            this.TotalRecordCount = e.TotalRecordCount;
            this.loading = false;
        })
    }
    reload() {
        this._api.getList(0, this.pageSize, this.Sorting).then(e => {
            this.memberList = e.Records;
            this.pageIndex = 1;
            this.TotalRecordCount = e.TotalRecordCount;
            this.loading = false;
        })
    }
    returnSortChecked(e) {
        this.loading = true;
        this.Sorting = `${e.key} ${e.value == 0 ? 'ASC' : 'DESC'}`;
        this._api.getList(0, 20, this.Sorting).then(e => {
            this.memberList = e.Records;
            this.TotalRecordCount = e.TotalRecordCount;
            this.loading = false;
            this.pageIndex = 1;
        })
    }
    search() {
        this.searchbox = true;
    }
    handleOk = (e) => {
        this._api.getList(0, 20, '', this.uid, this.tel).then(e => {
            this.memberList = e.Records;
            this.pageIndex = 1;
            this.TotalRecordCount = e.TotalRecordCount;
            this.searchbox = false;
        })
    }
    handleCancel = (e) => {
        this.searchbox = false;
    }

}
