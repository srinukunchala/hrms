import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-payroll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './process-payroll.html',
  styleUrls: ['./process-payroll.css']
})
export class ProcessPayroll {

  showAll = false;

  checklist = [
    'Lock Previous Payroll',
    'New Employee additions',
    'Employee Separations',
    'Confirmation Updates',
    'Employee data updates',
    'Update Payment Details',
    'Salary Revisions',
    'Update One Time Payment',
    'Update One Time Deductions',
    'Update any other salary changes'
  ];

  get visibleChecklist() {
    return this.showAll ? this.checklist : this.checklist.slice(0, 5);
  }

  toggleChecklist() {
    this.showAll = !this.showAll;
  }
}
