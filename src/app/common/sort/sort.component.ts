import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

const sortType = [
    { 'value': '0', 'label': 'ASC（从小到大）' },
    { 'value': '1', 'label': 'DESC（从大到小）' }
]
@Component({
    selector: 'app-sort',
    templateUrl: './sort.component.html',
    styleUrls: ['./sort.component.less']
})
export class SortComponent implements OnInit {
    // 传入排序是否展示
    // public sortModalVisible: boolean; // 控制模态框是否展示
    public sortType = sortType; // 可选择的排序方式
    public sortModalVisible: boolean= false;
    @Input() public sortList: Array<any>; // 需要传入的排序名称列表
    public selectedOption1: any; // 选中的排序名称
    public selectedOption2: any; // 选中的排序方式
    @Output() selectedOption = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    openSortModal() {
        this.sortModalVisible = true;
    }

    closeModalSort() {
        this.sortModalVisible = false;
    }
    confirmModalSort(e) {
        this.selectedOption.emit({'key': this.selectedOption1.value, 'value': this.selectedOption2.value});
        this.closeModalSort();
    }
}
