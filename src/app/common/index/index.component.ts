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
                title: '销售管理',
                name:'sell',
                icon:'anticon-shopping-cart',
                children: [
                    { title: '卖订单', link: 'sellOrder' },
                    { title: '售出订单', link: 'soldOrder' },
                    { title: '退货订单', link: 'rejectOrder' },
                    { title: '运单号', link: 'deliverNum' },
                ]
            },
            {
                title: 'APP管理',
                name:'APP',
                icon:'anticon-android',
                children: [
                    { title: '4.0活动管理', link: 'activityFrame' },
                    { title: '版本管理', link: 'appVersion' },
                    { title: '专栏管理', link: 'topic' },
                    { title: '公告管理', link: 'noticeManage' },
                    { title: 'KV管理', link: 'kv' },
                    { title: '启动页管理', link: 'startup' },
                    { title: '帮助中心', link: 'help' },
                    { title: '新增品牌', link: 'newbrand' },
                    { title: '新闻中心', link: 'news' },
                    { title: '图片管理', link: 'uploadimg' },
                ]
            },
            {
                title: '配置管理',
                name:'site',
                icon:'anticon-setting',
                children: [
                    { title: '品类管理', link: 'tree' },
                    { title: '品牌级别', link: 'brandGrade' },
                    { title: '品牌管理', link: 'brand' },
                    { title: '枚举项管理', link: 'enum' },
                    { title: '常见问题管理', link: 'faq' },
                    { title: '模板管理', link: 'template' },
                    { title: '模板组管理', link: 'templateGroup' },
                    { title: '报价因子管理', link: 'calculatorConfig' },
                    { title: '物流管理', link: 'deliver' },
                    { title: '关键词热搜管理', link: 'keywordRec' },
                ]
            },
            {
                title: '会员管理',
                name:'usermanage',
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
                title: '财务管理',
                name:'money',
                icon:'anticon-bank',
                children: [
                    { title: '钱包管理', link: 'walletManager' },
                    { title: '物流到付', link: 'logistics' },
                    { title: '预约取件', link: 'appointPickup' },
                    { title: '奖励金审核', link: 'bounty' },
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
            {
                title: '小程序管理',
                name: 'bargain',
                icon: 'anticon-message',
                children: [
                    { title: '砍价', link: 'bargain' },
                    { title: '砍价记录', link: 'recordIndex' },
                ]
            },
            {
                title: '咸鱼管理',
                name: 'ali',
                icon: 'anticon-api',
                children: [
                    { title: 'SPU管理', link: 'spuManager' },
                    { title: '报价管理', link: 'aliQuote' },
                    { title: '订单管理', link: 'aliOrder' },
                    { title: '黑名单管理', link: 'aliBlack' },
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
