import { Router } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
const searchList = [
    {
        title: '流程管理',
        name: 'process',
        icon: 'anticon-fork',
        children: [
            { title: '待审批', link: 'primit' },
            { title: '异常处理', link: 'handerror' },
        ]
    },
    {
        title: '竞赛管理',
        name: 'contest',
        icon: 'anticon-camera',
        children: [
            { title: '竞赛详情', link: 'contestList' },
        ]
    },
    {
        title: '学生管理',
        name: 'stumanage',
        icon: 'anticon-user',
        children: [
            { title: '用户管理', link: 'member' },
        ]
    },
    {
        title: '统计分析',
        name: 'data',
        icon: 'anticon-pie-chart',
        children: [
            { title: '成绩趋势', link: 'sellerActive' },
        ]
    },
]
const stuList = [
    {
        title: '流程管理',
        name: 'process',
        icon: 'anticon-fork',
        children: [
            { title: '审批中', link: 'primit' },
            { title: '异常处理', link: 'handerror' },
        ]
    },
    {
        title: '竞赛管理',
        name: 'contest',
        icon: 'anticon-camera',
        children: [
            { title: '竞赛详情', link: 'contestList' },
        ]
    },

    {
        title: '学生管理',
        name: 'stumanage',
        icon: 'anticon-user',
        children: [
            { title: '个人中心', link: 'stuMore' },
        ]
    },
    {
        title: '统计分析',
        name: 'data',
        icon: 'anticon-pie-chart',
        children: [
            { title: '成绩趋势', link: 'sellerActive' },
        ]
    },
]
@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
    public isVisible = false;
    public list: any;
    public name: any;
    public auth = window.localStorage.getItem('auth')
    public id = window.localStorage.getItem('token')
    constructor(
        @Inject('ApiService') private _api,
        private _route: Router,
        private _notification: NzNotificationService
    ) { }

    ngOnInit() {
        if (this.auth == '1') {
            this.list = searchList;
        } else {
            this.list = stuList;
        }
        this.name = this.getparentname().name;
    }
    select(link) {
        return window.location.hash.indexOf(link) > -1;
    }
    change(name) {
        this.name = name;
    }
    getparentname() {
        const str = window.location.hash;
        for (let i = 0; i < this.list.length; i++) {
            const element = this.list[i];
            for (let j = 0; j < element.children.length; j++) {
                const child = element.children[j];
                if (str.indexOf(child.link) > -1) {
                    return element;
                }
            }
        }
        return { name: '' };
    }
    updata(old, new_pad, new_again) {
        if (new_pad != new_again) {
            return;
        }
        this._api.updataPwd(old, new_again).then(e => {
            this.isVisible = false;
            if (e.data) {
                this._notification.success('密码修改成功', '再次登陆启用新密码', { nzDuration: 4000 });
            } else {
                this._notification.error('密码修改失败', '请检查原密码是否正确', { nzDuration: 4000 });
            }
        })
    }
    out(){
        this._route.navigate(['/'])
    }
}
