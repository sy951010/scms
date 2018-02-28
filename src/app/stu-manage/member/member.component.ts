import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { Mock } from 'mockjs';
const TitleList = ['用户ID', 'name', 'tel', 'eamil', 'school', '专业', 'address'];
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
    public loading: boolean;  // 加载动画
    public TotalRecordCount: number; // 数据总条目
    public Sorting = 'user_id DESC' // 默认按id倒序
    public searchbox = false; // 搜索弹框显示隐藏
    constructor(
        @Inject('ApiService') private _api,
        private _app: AppComponent,
    ) { }

    ngOnInit() {
        this.getData();
        console.log(this.memberList);
        // this.loading = true;
        // this._api.getList(0, 20, this.Sorting).then(e => {
        //     // this.memberList = e.Records;
        //     // this.TotalRecordCount = e.TotalRecordCount;
        //     console.log(e);
        //     this.loading = false;
        // });
    }
    
    getData() {
        this.loading = true;
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
                    "zhuanye|1": [
                        "网络工程",
                        "数字媒体",
                        "计算机科学"
                    ],
                    "address": function () {
                        return Mock.mock('@city(true)')
                    }
                }
            ]
        })
        this.memberList = data.array;
        this.loading = false;
    }
    

}
