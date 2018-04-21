import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-search-text',
    templateUrl: './search-text.component.html',
    styleUrls: ['./search-text.component.less']
})
export class SearchTextComponent implements OnInit {

    // test
    @Input() public value: any;
    @Input() public key: any;
    @Input() public type: any;
    @Output() public returns = new EventEmitter();
    public inputValue: any;
    constructor() { }

    ngOnInit() {
        this.passOn();
    }

    // 监控文本框的值得变化
    _console(e) {
        this.inputValue = e;
    }

    //   传回输入的值
    passOn() {
        const jsonstr = new Object();
        jsonstr[this.key] = this.inputValue == undefined ? null : this.inputValue;
        this.returns.emit(jsonstr);
    }
}
