import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-notice',
    templateUrl: './notice.component.html',
    styleUrls: ['./notice.component.less']
})
export class NoticeComponent implements OnInit {
    public tabs = [];
    public nzTabPosition = 'top';
    constructor() { }

    ngOnInit() {
        for (let i = 0; i < 11; i++) {
            this.tabs.push({
                name: `Tab ${i}`,
                content: `4.4.2版本更新内容：
                1.  用户来源平台修改，修改为来源，平台，只二系统，软件下载源，用户地区，邀请人
                2.  会员管理-列表展示修改，导出数据修改
                3.  使用APP，微信服务号，小程序可以正常获取三方下载源和系统
                4.  旧数据对于以上字段进行了同步（不可逆）
                5.  RPC放宽了超时和连接超时的设定
                6.  修复了寄卖到期／续卖到期／后台强制到期时用户可操作时间倒计时显示bug
                7.  满满退回列表／丢弃列表库位排序（字母序）
                8.  RA订单生成不再进行物品补录（功能已完成但未开放）
                9.  iframe内H5跳转时分享特性修复
                10.  数据库修改
                11.  此版本会影响到的底层功能：用户创建`
            });
        }
    }
}
