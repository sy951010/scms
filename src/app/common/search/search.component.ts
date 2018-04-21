import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';
import { element } from 'protractor';
// test  下拉多选框
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less']
})
export class SearchComponent implements OnInit {
    // 0:输入的文本框；1：下拉单选；2：下拉多选；3：时间点；4：时间段；
    @Input() public list;
    @Output() public commitResults = new EventEmitter;

    public searchList;
    public searchModalVisible = false;
    public saveJson: any = {};
  constructor(
  ) { }

  ngOnInit() {
    this.searchList = this.list.list;
  }

//   打开弹框
  openSearchModal() {
      this.searchModalVisible = true;
  }

//   关闭弹框
  closeModalSearch() {
    this.searchModalVisible = false;
  }

//   关闭弹框 && 返回数据
  confirmModalSearch(e) {
        this.closeModalSearch();
        this.commitResults.emit(this.saveJson);
  }


    // 接收返回的text值
    searchText(e) {
        this.saveSearch(e);
    }
    // 接收返回的单选值
    searchSelected(e) {
        this.saveSearch(e);
    }

    // 接收返回的多选值
    searchSelecteds(e) {
        this.saveSearch(e);
    }

    // 接收返回地时间点
    searchDate(e) {
        this.saveSearch(e);
    }

    // 接收返回的时间段
    searchDates(e) {
        this.saveSearch(e);
    }

    saveSearch(s) {
        this.saveJson = Object.assign(this.saveJson, s);
    }
}
