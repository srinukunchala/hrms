import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calander } from '../calander/calander';

@Component({
  selector: 'engage',
  standalone: true,
  imports: [CommonModule, Calander],
  templateUrl: './engage.html',
  styleUrls: ['./engage.css']
})
export class Engage {
  // SORT DROPDOWN STATE
isSortOpen = false;
selectedSort = 'Newest first';


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
  this.isSortOpen = !this.isSortOpen;
}

/* SELECT SORT OPTION */
selectSort(option: string) {
  this.selectedSort = option;
  this.isSortOpen = false;
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
@HostListener('document:click')
closeSortDropdownAndPayrollMonth() {
 
  this.isSortOpen = false;

  this.isPayrollMonthOpen = false;
}
}

