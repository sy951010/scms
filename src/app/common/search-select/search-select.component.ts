import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
    selector: 'app-search-select',
    templateUrl: './search-select.component.html',
    styleUrls: ['./search-select.component.less']
})
export class SearchSelectComponent implements OnInit {
    @Input() public value;
    @Input() public key;
    @Input() public list;
    @Output() public returns = new EventEmitter();
    public selectedOption: any; // 监控变化中的选中项

    constructor() { }

    ngOnInit() {
        this.lucky();
    }

    lucky() {
        const jsonstr = new Object();
        jsonstr[this.key] = this.selectedOption == undefined ? '' : this.selectedOption.key;
        this.returns.emit(jsonstr);
    }
}
