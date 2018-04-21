import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
@Component({
    selector: 'app-search-dates',
    templateUrl: './search-dates.component.html',
    styleUrls: ['./search-dates.component.less']
})
export class SearchDatesComponent implements OnInit {
    @Input() public key: any;
    @Input() public value: any;
    @Output() public returns = new EventEmitter();
    @Output() public returnsKey = new EventEmitter();

    public date1: any;
    public date2: any;
    // public date: any;

    constructor(
    ) { }

    ngOnInit() {
        this.change();
    }

    change() {
        const date1 = this.date1 == undefined ? '' : Date.parse(this.date1);
        const date2 = this.date2 == undefined ? '' : Date.parse(this.date2);
        const jsonstr1 = '{"' + this.key[0] + '":"' + date1 + '","' + this.key[1] + '":"' + date2 + '"}';
        //   const jsonstr = new Object();
        //   jsonstr[this.key] = JSON.parse(jsonstr1);
        this.returns.emit(JSON.parse(jsonstr1));
    }
}
