import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calander } from '../calander/calander';

@Component({
  selector: 'app-expense-claims',
  standalone: true,
  imports: [CommonModule, Calander],
  templateUrl: './expense-claims.html',
  styleUrls: ['./expense-claims.css']
})
export class ExpenseClaims {

  openIndex: number | null = null;

  batches = [
    {
      title: 'May - 2nd Batch',
      date: '(01 May 2025 - 31 May 2025)'
    },
    {
      title: 'April 2025 - First Batch',
      date: '(07 Apr 2025 - 30 Apr 2025)'
    },
    {
      title: 'June 2014',
      date: '(10 Jun 2014 - 30 Jun 2014)'
    }
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}

