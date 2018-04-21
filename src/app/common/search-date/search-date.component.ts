import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';

@Component({
  selector: 'app-search-date',
  templateUrl: './search-date.component.html',
  styleUrls: ['./search-date.component.less']
})
export class SearchDateComponent implements OnInit {
    @Input() public key: any;
    @Input() public value: any;
    @Output() public returns = new EventEmitter();

    // 监控选中值
    public date: any;
  constructor(
  ) { }

  ngOnInit() {
  }
  change(e) {
    const jsonstr = new Object();
    jsonstr[this.key] = Date.parse(e);
    this.returns.emit(jsonstr);
  }
}
