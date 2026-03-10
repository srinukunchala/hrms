import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';
import { Calander } from '../calander/calander';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [CommonModule, Calander, RouterModule],
  templateUrl: './employee.html',
  styleUrls: ['./employee.css']
})
export class Employee implements AfterViewInit, OnDestroy {

  isChildActive = false;

  private headCountChart?: Chart;
  private mobileChart?: Chart;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Any route deeper than /employee means child view (Analytics Hub)
       this.isChildActive = this.router.url.startsWith('/mainboard/employee/')
  && this.router.url !== '/mainboard/employee';

        // Destroy charts when switching to child route
        if (this.isChildActive) {
          this.destroyCharts();
        } else {
          // Recreate charts when coming back
          setTimeout(() => this.loadCharts());
        }
      });
  }

  ngAfterViewInit(): void {
    if (!this.isChildActive) {
      this.loadCharts();
    }
  }

  ngOnDestroy(): void {
    this.destroyCharts();
  }

  /* ================= CHARTS ================= */

  loadCharts() {
    this.destroyCharts(); // safety

    /* HEAD COUNT LINE CHART */
    this.headCountChart = new Chart('headCountChart', {
      type: 'line',
      data: {
        labels: ['Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec','Jan','Feb'],
        datasets: [{
          data: [24,24,24,23,22,22,22,21,21,21,21,21],
          borderColor: '#22c55e',
          backgroundColor: '#22c55e',
          tension: 0.4,
          fill: false,
          pointRadius: 3
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: false, grid: { color: '#eef2f7' } }
        }
      }
    });

    /* MOBILE USERS DOUGHNUT */
    this.mobileChart = new Chart('mobileChart', {
      type: 'doughnut',
      data: {
        labels: ['Using App', 'Not Using'],
        datasets: [{
          data: [2, 18],
          backgroundColor: ['#c084fc','#e5e7eb'],
          borderWidth: 0
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        cutout: '65%'
      }
    });
  }

  destroyCharts() {
    this.headCountChart?.destroy();
    this.mobileChart?.destroy();
    this.headCountChart = undefined;
    this.mobileChart = undefined;
  }
}