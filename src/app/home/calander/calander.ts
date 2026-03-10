import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-calander',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calander.html',
  styleUrls: ['./calander.css'],
})
export class Calander {


  // PAYROLL MONTH DROPDOWN
  isPayrollMonthOpen = false;
  selectedPayrollMonth = "Dec'25";

  months = [
    "Apr'25", "May'25", "Jun'25",
    "Jul'25", "Aug'25", "Sep'25",
    "Oct'25", "Nov'25", "Dec'25",
    "Jan'26", "Feb'26", "Mar'26"
  ];


  /* TOGGLE SORT DROPDOWN */
  toggleSort(event: Event) {
    event.stopPropagation();
    // this.isSortOpen = !this.isSortOpen;
  }

  /* SELECT SORT OPTION */
  selectSort(option: string) {
    // this.selectedSort = option;
    // this.isSortOpen = false;
  }
  /* TOGGLE DROPDOWN */
  togglePayrollMonth(event: Event) {
    event.stopPropagation();
    this.isPayrollMonthOpen = !this.isPayrollMonthOpen;
  }

  /* SELECT MONTH */
  selectPayrollMonth(month: string) {
    this.selectedPayrollMonth = month;
    this.isPayrollMonthOpen = false;
  }

  /* CLOSE ON OUTSIDE CLICK */

  closeSortDropdownAndPayrollMonth() {



    this.isPayrollMonthOpen = false;
  }


}
