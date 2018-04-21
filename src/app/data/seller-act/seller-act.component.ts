import {
  Component,
  OnInit
} from '@angular/core';
declare  var echarts: any;
@Component({
  selector: 'app-seller-act',
  templateUrl: './seller-act.component.html',
  styleUrls: ['./seller-act.component.less']
})
export class SellerActComponent implements OnInit {
  public chartOption: any;
  constructor() {}

  ngOnInit() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('main'));
    console.log(myChart);
    // 绘制图表
    myChart.setOption({
        title: {
          text: '近七年竞赛成绩趋势'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['统一考试', '学科竞赛', '文学艺术', '体育竞技', '其他']
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017']
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
            name: '其他',
            type: 'line',
            stack: '总量',
            areaStyle: {
              normal: {}
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '统一考试',
            type: 'line',
            stack: '总量',
            areaStyle: {
              normal: {}
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: '学科竞赛',
            type: 'line',
            stack: '总量',
            areaStyle: {
              normal: {}
            },
            data: [150, 232, 201, 154, 190, 330, 410]
          },
          {
            name: '文学艺术',
            type: 'line',
            stack: '总量',
            areaStyle: {
              normal: {}
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },
          {
            name: '体育竞技',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: {
              normal: {}
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }],
      });

    }
}
