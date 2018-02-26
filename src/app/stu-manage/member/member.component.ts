import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Mock } from 'mockjs';
const TitleList = ['用户ID', 'name', 'tel', 'eamil', 'school', 'address', '操作'];
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
        this.getData();
        console.log(this.memberList);
        this.loading = true;
        this.sourceOption = [
            'focus',
            'asdhfj',
            'asdhf',
            'asdhfj'
        ];
        // this._api.getList(0, 20, this.Sorting).then(e => {
        //     // this.memberList = e.Records;
        //     // this.TotalRecordCount = e.TotalRecordCount;
        //     console.log(e);
        //     this.loading = false;
        // });
    }
    
    getData() {
        var data = Mock.mock({
            "array|10": [
                {
                    "id|1-100": 1,
                    "name": function () {
                        return Mock.mock('@name')
                    },
                    "tel|10000000-19999999": 1,
                    "email": function () {
                        return Mock.mock('@email')
                    },
                    "school|1": [
                        "许昌学院",
                        "清华大学",
                        "北京大学"
                    ],
                    "address": function () {
                        return Mock.mock('@city(true)')
                    }
                }
            ]
        })

        this.memberList = data.array;
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
