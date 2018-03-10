import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {
    public list: any;
    public name: any;
    constructor(
        private _route: Router
    ) { }

    ngOnInit() {
        this.list = [
            {
                title: '流程管理',
                name:'process',
                icon:'anticon-fork',
                children: [
                    { title: '待审批', link: 'primit' },
                    { title: '待复核', link: 'review' },
                    { title: '异常处理', link: 'handerror' },
                ]
            },
            {
                title: '竞赛管理',
                name:'contest',
                icon:'anticon-camera',
                children: [
                    { title: '竞赛详情', link: 'contestList' },
                ]
            },
            {
                title: '学生管理',
                name:'stumanage',
                icon:'anticon-user',
                children: [
                    { title: '用户管理', link: 'member' },
                ]
            },
            {
                title: '系统管理',
                name:'system',
                icon:'anticon-windows',
                children: [
                    { title: '管理员', link: 'manager' },
                    { title: '用户组管理', link: 'groupList' },
                    { title: '方法管理', link: 'methodList' },
                    { title: '商品状态日志', link: 'buybackLog' },
                    { title: '友盟推送', link: 'umeng' },
                ]
            },
            {
                title: '数据分析',
                name:'data',
                icon:'anticon-pie-chart',
                children: [
                    { title: '用户行为-买家', link: 'buyerActive' },
                    { title: '用户行为-卖家', link: 'sellerActive' },
                    { title: '订单数据-退回', link: 'orderReturn' },
                    { title: '订单数据-购买', link: 'orderBuy' },
                    { title: '订单数据-卖衣', link: 'analbuyback' },
                    { title: '新增注册用户统计', link: 'registAnal' },
                ]
            },
            {
                title: '营销中心',
                name:'market',
                icon:'anticon-area-chart',
                children: [
                    { title: '用户反馈', link: 'feedback' },
                    { title: '下载日志', link: 'download' },
                ]
            },
        ]
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
        return {name:''};
    }
}
