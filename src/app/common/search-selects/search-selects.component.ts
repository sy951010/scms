import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-selects',
    templateUrl: './search-selects.component.html',
    styleUrls: ['./search-selects.component.less']
})
export class SearchSelectsComponent implements OnInit {
    @Input() public value;
    @Input() public key;
    @Input() public list;
    @Output() public returns = new EventEmitter();
    public selectedOptions: any; // 监控变化中的选中项
    constructor() { }

    ngOnInit() {
    }

    lucky(e) {
        if (!e) {
            const arr = [];
            for (const a of this.selectedOptions) {
                arr.push(a.key);
            }
            const jsonstr = new Object();
            jsonstr[this.key] = arr.length == 0 ? '' : arr;
            this.returns.emit(jsonstr);
        }
    }

}
