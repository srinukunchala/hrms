import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calander } from '../calander/calander';
import { Router, NavigationEnd, RouterModule } from '@angular/router';

@Component({
  selector: 'app-payroll',
  standalone: true,
  imports: [CommonModule ,Calander, RouterModule],
  templateUrl: './payroll.html',
  styleUrls: ['./payroll.css']
})
export class Payroll {
  
  activePayrollMenu: string | null = null;

  togglePayroll(menu: string, event: Event) {
    event.stopPropagation();
    this.activePayrollMenu =
      this.activePayrollMenu === menu ? null : menu;
  }

}