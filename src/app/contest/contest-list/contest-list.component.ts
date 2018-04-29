import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd';

@Component({
  selector: 'app-contest-list',
  templateUrl: './contest-list.component.html',
  styleUrls: ['./contest-list.component.less']
})
export class ContestListComponent implements OnInit {
  public Info = {}
  public type = {};
  public garde = {};
  public mode = {};
  public award:any;
  public item: any;
  public box = false;
  public id:number;
  constructor(
    @Inject('ApiService') private _api,
    private _routerInfo: ActivatedRoute,
    private _notification: NzNotificationService
  ) { }

  ngOnInit() {
    let id = this._routerInfo.snapshot.params['id'];
    this.id = id;
    this._api.check();
    this._api.getenum().then(e => {
      this.garde = e.Game_garde;
      this.type = e.Game_type;
      this.mode = e.Game_mode;
      this.getData(id);
    })
  }
  getData(id) {
    this._api.contestMore(id).then(e => {
      this.Info = e.data;
      this.award = JSON.parse(this.Info['award'])
      console.log(this.award)
      this.item = this.Info['item']? JSON.parse(this.Info['item']):[];
    });
  }
  update(){
    this.box = false;
    let id = this._routerInfo.snapshot.params['id'];
    let name = window.localStorage.getItem('name');
    let status = this.Info['status']?'1':'2';
    this._api.contestUpdate(id,status,name).then(e=>{
      if (e.data) {
        this._notification.success('修改成功', '',{ nzDuration:4000});
        this.getData(id);
      } else {
        this._notification.error('修改失败', '',{ nzDuration:4000});
      }
    })
  }

}
