import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
declare var Mock: any;
const TitleList = ['竞赛名称', '级别', '类型', '提交人', '提交时间', '状态', '修改人'];

@Component({
  selector: 'app-primit',
  templateUrl: './primit.component.html',
  styleUrls: ['./primit.component.less']
})
export class PrimitComponent implements OnInit {
  public TitleList = TitleList;
  public List=[];
  public searchbox = false;
  constructor(
    private _app: AppComponent,
  ) { }

  ngOnInit() {
    this.getData();
    console.log(this.List)
  }
  getData() {
    let data = Mock.mock({
      'array|10': [
        {
          'name|1': [
            '英语四级',
            '计算机二级',
            '蓝桥杯',
            '运动会',
          ],
          'jibie|1': [
            '国家级',
            '省级',
            '校级',
          ],
          'type|1':[
            '个人',
            '团队',
          ],
          'peoplename|1': function () {
            return Mock.mock('@name')
          },
          'time|10000-99999':1,
          'status|1-3':1,
          'changename|1': function () {
            return Mock.mock('@name')
          },
        }
      ]
    })
    this.List = data.array;
  }
}
