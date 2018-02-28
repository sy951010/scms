import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
const TitleList = ['竞赛名称', '级别', '类型', '申报截止日期',  '状态', '修改人'];
declare var Mock: any;

@Component({
  selector: 'app-contest-more',
  templateUrl: './contest-more.component.html',
  styleUrls: ['./contest-more.component.less']
})
export class ContestMoreComponent implements OnInit {
  public TitleList = TitleList;
  public List = [];
  public searchbox = false;
  constructor(
    private _app: AppComponent,
  ) { }

  ngOnInit() {
    this.getData();
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
          'type|1': [
            '个人',
            '团队',
          ],
          'begintime|10000-99999': 1,
          'status|1-3': 1,
          'changename|1': function () {
            return Mock.mock('@name')
          },
        }
      ]
    })
    this.List = data.array;
  }
}
