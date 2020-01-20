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
      text: 'ECharts实例',
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

    },
    xAxis: {
      type:'category',
      data: ['One','Two','Three','Four','Five']
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: 'Name',
      type: 'bar',
      barWidth: '60%',
      data: [90,50,100,20,80]
    }]
  };

  ngOnInit() {
  }

}
