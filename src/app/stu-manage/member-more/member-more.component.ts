import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Inject } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd';
declare var echarts: any;

@Component({
  selector: 'app-member-more',
  templateUrl: './member-more.component.html',
  styleUrls: ['./member-more.component.less']
})
export class MemberMoreComponent implements OnInit {
  public Info={};
  public id:any;
  public modal = false;
  public obj = {};
  constructor(
    @Inject('ApiService') private _api,
    private _routerInfo:ActivatedRoute,
    private _notification: NzNotificationService,
  ) {}

  ngOnInit() {
    this.id = this._routerInfo.snapshot.params['id'];
    if (this.id) {
      this.getData()
    } else {
      this.id = window.localStorage.getItem('token');  
      this.getData()
    }
    setTimeout(() => {
      var myChart = echarts.init(document.getElementById('spider'));
      let option = {
        radar: {
          // shape: 'circle',
          name: {
            textStyle: {
              color: '#fff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [3, 5]
            }
          },
          indicator: [
            { name: '德', max: 6500 },
            { name: '智', max: 16000 },
            { name: '体', max: 30000 },
            { name: '美', max: 38000 },
            { name: '劳', max: 52000 },
          ]
        },
        series: [{
          name: '预算',
          type: 'radar',
          // areaStyle: {normal: {}},
          data: [
            {
              value: [4300, 10000, 28000, 35000, 50000, 19000],
              name: '预算分配（Allocated Budget）'
            },
          ]
        }]
      };
      myChart.setOption(option);
      
    }, 1000);
    
  }
  show(){
    this.modal = true;
    this.obj = JSON.parse(JSON.stringify(this.Info));
  }
  getData(){
    this._api.getMember(this.id).then(e => {
      this.Info = e.data;
    });
  }
  update(){
    this.modal = false;
    this._api.updateMember(this.obj).then(e=>{
      if (e.data) {
        this._notification.success('修改成功','');
        this.getData()
      }else{
        this._notification.error('修改失败','');
      }
    })
  }
}
