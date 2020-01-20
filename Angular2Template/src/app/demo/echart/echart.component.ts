import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'demo-echart',
  templateUrl: './echart.component.html',
  styleUrls: ['./echart.component.less']
})
export class EChartComponent implements OnInit {

  constructor() { }

  chartOption = {
    title: {
      text: '柱状图（bar）',
      textStyle: {
        color: '#666666',
        fontSize: 16
      }
    },
    legend: {
      type: 'plain',
      data: [{
        name: 'Name'  ,
        icon: 'circle',
        textStyle: {
          color: '#666666'
        }
      }]
    },
    grid: {
      x: '10%', y: '10%', width: '80%', height: '80%'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {            // 坐标轴指示器，坐标轴触发有效
        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    xAxis: {
      type:'category',
      axisLine: {
        lineStyle: {
          color: '#3bafda'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#3bafda'
        }
      },
      axisLabel: {
        color: '#666666'
      },
      splitLine: {
      },
      data: ['One','Two','Three','Four','Five']
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#3bafda'
        }
      },
      axisTick: {
        lineStyle: {
          color: '#3bafda'
        }
      },
      axisLabel: {
        color: '#666666'
      },
      splitLine: {
        lineStyle: {
          color: '#eeeeee'
        }
      },
    },
    series: [{
      name: 'Name',
      type: 'bar',
      barWidth: '60%',
      color: ['#3bafda'],
      data: [90,50,100,20,80]
    }]
  };

  ngOnInit() {
  }

}
