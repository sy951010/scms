import { Component, Inject, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NzMessageService, NzNotificationService } from 'ng-zorro-antd';
import { NzInputDirectiveComponent } from './../../../../node_modules/ng-zorro-antd'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.less']
})
export class EditComponent implements OnInit {
  public current = 0;
  public tags = [{ key: 1, value: '一等奖' }, { key: 2, value: '二等奖' }, { key: 3, value: '三等奖' }];
  public items = [];
  public obj = {};

  public inputVisible = false;
  public inputVisible2 = false;
  public inputValue = '';
  public inputValue2 = '';

  @ViewChild('input') input: NzInputDirectiveComponent;
  constructor(
    @Inject('ApiService') private _api,    
    private _message: NzMessageService,
    private _notification: NzNotificationService,
  ) { }

  ngOnInit() {
  }


  pre() {
    this.current -= 1;
  }
  handleClose(removedTag: any): void {
    this.tags = this.tags.filter(tag => tag !== removedTag);
  }
  handleClose2(removedTag: any): void {
    this.items = this.items.filter(tag => tag !== removedTag);
  }
  showInput(): void {
    this.inputVisible = true;
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 10);
  }
  showInput2(): void {
    this.inputVisible2 = true;
    setTimeout(() => {
      this.input.nativeElement.focus();
    }, 10);
  }

  handleInputConfirm(): void {
    if (this.inputValue) {
      let obg = {
        key: this.tags.length + 1,
        value: this.inputValue
      }
      this.tags.push(obg);
    }
    this.inputValue = '';
    this.inputVisible = false;
  }
  handleInputConfirm2(): void {
    if (this.inputValue2) {
      let obg = {
        key: this.items.length + 1,
        value: this.inputValue2
      }
      this.items.push(obg);
    }
    this.inputValue2 = '';
    this.inputVisible2 = false;
  }
  next() {
    this.current += 1;
  }

  done() {
    if (this.obj['end_time']) {
      this.obj['end_time'] = Date.parse(this.obj['end_time'])/1000
    } else {
      this._notification.error('添加错误', '截止日期不能为空', { nzDuration: 4000 })
      return;
    }
    this.obj['award'] = this.obj['radioValue']==1?'':JSON.stringify(this.tags)
    this.obj['item'] = this.items.length < 1 ? '' : JSON.stringify(this.items) ;
    this.obj['update_name'] = window.localStorage.getItem('name');   
    this._api.contest(this.obj).then(e=>{
      this._notification.success('添加成功', '', { nzDuration: 4000 });
      window.history.go(-1);
    })
  }
}
