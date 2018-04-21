import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  
  constructor(
    @Inject('ApiService') private _api,
    private _routerInfo: ActivatedRoute
  ) { }

  ngOnInit() {
    let id = this._routerInfo.snapshot.params['id'];
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

}
