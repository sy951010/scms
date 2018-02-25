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
                name:'buyback',
                icon:'anticon-fork',
                children: [
                    { title: '临时商品详情', link: 'buybackv4' },
                    { title: '待寄出物品', link: 'waitsend' },
                    { title: '暂存库位管理', link: 'buybackWarehouse' },
                    { title: '报价', link: 'myUnderQuotationItems' },
                    { title: '外包清理', link: 'myUnderOutsourceClean' },
                    { title: '拍摄', link: 'myUnderShoot' },
                    { title: '文描复合', link: 'myFilterReviewList' },
                    { title: '客服处理异常件', link: 'exception' },
                    { title: '卖家退回处理', link: 'buybackReturn' },
                    { title: '卖家丢弃处理', link: 'buybackDiscard' },
                ]
            },
            {
                title: '商品管理',
                name:'product',
                icon:'anticon-camera',
                children: [
                    { title: '商品详情', link: 'productMore' },
                    { title: '寄卖到期商品', link: 'expire' },
                ]
            },
            {
                title: '学生管理',
                name:'stumanage',
                icon:'anticon-user',
                children: [
                    { title: '用户管理', link: 'member' },
                    { title: '4.0母红包列表', link: 'bonus' },
                    { title: '4.0子红包列表', link: 'subbonus' },
                    { title: '黑名单', link: 'freeze' },
                    { title: '沙盒用户', link: 'sandBox' },
                    { title: '钱包记录', link: 'wallet' },
                    { title: '积分记录', link: 'point' },
                    { title: '积分赠送管理', link: 'pointExt' },
                    { title: '用户地址库', link: 'address' },
                    { title: '用户提现信息库', link: 'bankIndex' },
                    { title: '设备管理', link: 'device' },
                    { title: '验证码查询', link: 'sms' },
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
                    { title: '日志监听', link: 'listener' },
                    { title: '日志查看', link: 'log' },
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
            {
                title: '活动管理',
                name: 'activity',
                icon: 'anticon-smile',
                children: [
                    { title: '活动列表', link: 'activity' },
                    { title: '奖励分配', link: 'award' },
                ]
            },
            {
                title: '数据埋点',
                name: 'borypoint',
                icon: 'anticon-eye',
                children: [
                    { title: '埋点列表', link: 'burypoint' },
                    { title: '绑定列表', link: 'burypointlist' },
                    { title: '会话监听', link: 'sessionList' },
                    { title: '页面监听', link: 'pageList' },
                    { title: '事件监听', link: 'eventList' },
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
