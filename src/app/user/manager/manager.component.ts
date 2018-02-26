import { Component, OnInit, Inject } from '@angular/core';
import { AppComponent } from '../../app.component';
// import { HttpService } from '../../../service/http.service';
// 模拟数据2 
const testTitle = ['序号', '商品', '商品信息', '价格', '所有权', '状态', 'WMS同步', '日志'];
const testData = [{
    'id': '111111',
    'sku': '123456',
    'src': 'https://img.goshare2.com//app-images/chinese00.jpg@!middle',
    'name': '上衣上衣',
    'sellSite': '这里是卖点',
    'brandGrade': '一级-二级',
    'brand': 'HM',
    'grade': '品牌级别',
    'size': '标准尺码|标签尺码',
    'percentage': '成色',
    'salePrice': '100',
    'offset': '8',
    'oldPrice': '500',
    'costPrice': '50',
    'type': '寄卖',
    'belong': '用户',
    'userID': '1234546',
    'phone': '15156280727',
    'oldSalerID': '654321',
    'oldPhone': '18855599323',
    'status': '已上架',
    'stock': '5',
    'surplus': '2',
    'first': '2018-01-31',
    'last': '2018-02-01',
    'pro': '成功',
    'dd': '失败',
    'recently': '盒子/0727',
    'time': '2018-02-02'
},
{
    'id': '2222222',
    'sku': '123456',
    'src': 'https://img.goshare2.com//app-images/chinese00.jpg@!middle',
    'name': '上衣上衣',
    'sellSite': '这里是卖点',
    'brandGrade': '一级-二级',
    'brand': 'HM',
    'grade': '品牌级别',
    'size': '标准尺码|标签尺码',
    'percentage': '成色',
    'salePrice': '100',
    'offset': '8',
    'oldPrice': '500',
    'costPrice': '50',
    'type': '寄卖',
    'belong': '用户',
    'userID': '1234546',
    'phone': '15156280727',
    'oldSalerID': '654321',
    'oldPhone': '18855599323',
    'status': '已上架',
    'stock': '5',
    'surplus': '2',
    'first': '2018-01-31',
    'last': '2018-02-01',
    'pro': '成功',
    'dd': '失败',
    'recently': '盒子/0727',
    'time': '2018-02-02'
},
{
    'id': '3333333',
    'sku': '123456',
    'src': 'https://img.goshare2.com//app-images/chinese00.jpg@!middle',
    'name': '上衣上衣',
    'sellSite': '这里是卖点',
    'brandGrade': '一级-二级',
    'brand': 'HM',
    'grade': '品牌级别',
    'size': '标准尺码|标签尺码',
    'percentage': '成色',
    'salePrice': '100',
    'offset': '8',
    'oldPrice': '500',
    'costPrice': '50',
    'type': '寄卖',
    'belong': '用户',
    'userID': '1234546',
    'phone': '15156280727',
    'oldSalerID': '654321',
    'oldPhone': '18855599323',
    'status': '已上架',
    'stock': '5',
    'surplus': '2',
    'first': '2018-01-31',
    'last': '2018-02-01',
    'pro': '成功',
    'dd': '失败',
    'recently': '盒子/0727',
    'time': '2018-02-02'
},
{
    'id': '111111',
    'sku': '123456',
    'src': 'https://img.goshare2.com//app-images/chinese00.jpg@!middle',
    'name': '上衣上衣',
    'sellSite': '这里是卖点',
    'brandGrade': '一级-二级',
    'brand': 'HM',
    'grade': '品牌级别',
    'size': '标准尺码|标签尺码',
    'percentage': '成色',
    'salePrice': '100',
    'offset': '8',
    'oldPrice': '500',
    'costPrice': '50',
    'type': '寄卖',
    'belong': '用户',
    'userID': '1234546',
    'phone': '15156280727',
    'oldSalerID': '654321',
    'oldPhone': '18855599323',
    'status': '已上架',
    'stock': '5',
    'surplus': '2',
    'first': '2018-01-31',
    'last': '2018-02-01',
    'pro': '成功',
    'dd': '失败',
    'recently': '盒子/0727',
    'time': '2018-02-02'
},
{
    'id': '111111',
    'sku': '123456',
    'src': 'https://img.goshare2.com//app-images/chinese00.jpg@!middle',
    'name': '上衣上衣',
    'sellSite': '这里是卖点',
    'brandGrade': '一级-二级',
    'brand': 'HM',
    'grade': '品牌级别',
    'size': '标准尺码|标签尺码',
    'percentage': '成色',
    'salePrice': '100',
    'offset': '8',
    'oldPrice': '500',
    'costPrice': '50',
    'type': '寄卖',
    'belong': '用户',
    'userID': '1234546',
    'phone': '15156280727',
    'oldSalerID': '654321',
    'oldPhone': '18855599323',
    'status': '已上架',
    'stock': '5',
    'surplus': '2',
    'first': '2018-01-31',
    'last': '2018-02-01',
    'pro': '成功',
    'dd': '失败',
    'recently': '盒子/0727',
    'time': '2018-02-02'
}]

const sortList = [
    { 'value': 'id', 'label': '序号' },
    { 'value': 'name', 'label': '名称'},
    { 'value': 'grade', 'label': '品牌级别' },
    { 'value': 'size', 'label': '尺码' },
    { 'value': 'percentage', 'label': '成色' },
]

@Component({
    selector: 'app-manager',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.less']
})
export class ManagerComponent implements OnInit {
    public testTitle = testTitle;
    public testData = testData;
    public sortList = sortList;
    public sortChecked: any;
    constructor(
        private _app: AppComponent,
        // @Inject('HttpService') private _http,
    ) { }

    ngOnInit() {
        // this._http.getData();
    }

    // 获取排序返回数据
    returnSortChecked(e) {
        this.sortChecked = e;
    }
}
