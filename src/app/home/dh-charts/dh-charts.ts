import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dh-charts',
  imports: [CommonModule, RouterModule],
  templateUrl: './dh-charts.html',
  styleUrl: './dh-charts.css',
})
export class DhCharts implements AfterViewInit {

  private Chart: any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async ngAfterViewInit() {

    if (isPlatformBrowser(this.platformId)) {

      const chartModule = await import('chart.js/auto');
      this.Chart = chartModule.default;

      this.loadCharts();
    }
  }

  loadCharts() {

    this.createChart('genderChart','pie',['Male','Female'],[16,4]);

    this.createChart('ageChart','line',
      ['<20','25-30','30-35','35-40','40-45','45-50','>50'],
      [0,2,1,2,6,5,4]
    );

    this.createChart('serviceChart','line',
      ['<1','1-2','2-3','3-4','4-5','5-6','9-10','>10'],
      [2,10,1,1,2,2,1,1]
    );

    this.createChart('statusChart','bar',
      ['Confirmed','Probation'],
      [14,1]
    );

    this.createChart('deptChart','bar',
      ['Product','Operations','Management','Development','HR','Finance','Sales'],
      [1,1,1,2,2,2,6],
      true
    );

    this.createChart('ctcDeptChart','bar',
      ['Sales','Management','HR'],
      [5664200,5600000,3378100],
      true
    );

    this.createChart('ctcStatusChart','bar',
      ['Confirmed'],
      [22556571]
    );

    this.createChart('lastCtcChart','bar',
      ['Jul','Aug','Sep','Oct','Nov','Dec'],
      [24706571,24706571,23206571,23206571,23206571,23206571]
    );
  }

createChart(id: string, type: any, labels: any[], data: number[], horizontal = false) {

  // prevent server-side rendering crash
  if (typeof document === 'undefined') return;

  const canvas = document.getElementById(id) as HTMLCanvasElement;

  if (!canvas || !this.Chart) return;

  new this.Chart(canvas, {
    type: type,
    data: {
      labels: labels,
      datasets: [{
        label: 'Employees',
        data: data,
        backgroundColor: '#2f8f9d',
        borderColor: '#2f8f9d'
      }]
    },
    options: horizontal ? { indexAxis: 'y' } : {}
  });
}
}