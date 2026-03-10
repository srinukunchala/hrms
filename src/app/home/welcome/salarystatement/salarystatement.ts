import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Calander } from '../../calander/calander';


@Component({
  selector: 'app-salary-statement',
  standalone: true,
  imports: [CommonModule, Calander],
  templateUrl: './salarystatement.html',
  styleUrls: ['./salarystatement.css']
})
export class SalaryStatement {

  activeTab = 'bank';

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log('TAB:', params['tab']); // 👈 DEBUG
      this.activeTab = params['tab'] || 'bank';
    });
  }
}