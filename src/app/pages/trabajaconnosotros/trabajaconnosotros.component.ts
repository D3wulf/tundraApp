import { Component, Output, EventEmitter, Input} from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-trabajaconnosotros',
  templateUrl: './trabajaconnosotros.component.html',
  styles: [
  ]
})
export class TrabajaconnosotrosComponent {

  // Doughnut
  public doughnutChartLabels: Label[] = ['Programadores Junior', 'QA tester', 'Programadores Mid/Senior','RRHH & Technology Manager', 'Software engineer'];
  public doughnutChartData: MultiDataSet = [
    [120, 20, 20,1, 50],
    
    
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors:Color[]= [

    {
      backgroundColor:[
        '#60F0CC',
        '#DCFA64',
        '#E3AB66',
        '#FA64BC',
        '#4D62F5'
      ]
    }
  ]

}
