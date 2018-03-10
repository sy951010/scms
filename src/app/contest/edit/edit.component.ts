import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  public  current = 0;
  public items=[
    'aaa',
    'aaa',
    'aaa',
    'aaa',
    
  ]
  public index = 'First-content';
  constructor(
    private _message: NzMessageService,
  ) { }

  ngOnInit() {
  }
  

  pre() {
    this.current -= 1;
    this.changeContent();
  }
  add(){
    if (this.items.length>5) {
      return
    }
    this.items.push('aaa');
  }
  reduce() {
    this.items.pop();
  }
  next() {
    this.current += 1;
    this.changeContent();
  }

  done() {
    this._message.success('done');
  }

  changeContent() {
    switch (this.current) {
      case 0: {
        this.index = 'First-content';
        break;
      }
      case 1: {
        this.index = 'Second-content';
        break;
      }
      case 2: {
        this.index = 'third-content';
        break;
      }
      default: {
        this.index = 'error';
      }
    }
  }

}
