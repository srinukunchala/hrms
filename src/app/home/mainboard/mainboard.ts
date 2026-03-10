import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd, RouterLink } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-mainboard',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './mainboard.html',
  styleUrls: ['./mainboard.css']
})
export class Mainboard {

  /* ===================== */
  /* UI STATES */
  /* ===================== */
  isSidebarOpen = false;
  isMenuOpen = false;
  isSettingsOpen = false;
  isLeaveMainOpen = false;
  isLeaveInfoOpen = false;
  isWorkflowModulesOpen = false;
  isReportsMenuOpen = false;





  /* EMPLOYEE DROPDOWNS */
  isMainOpen = false;
  isInformationOpen = false;
  isAdminOpen = false;
  isSetupOpen = false;

  /* PAYROLL DROPDOWNS (SINGLE STATE) */
  activePayrollMenu: string | null = null;

  /* ===================== */
  /* ROUTE STATES */
  /* ===================== */
  isEmployeeRoute = false;
  isPayrollRoute = false;
  isLeaveAttendanceRoute = false;
  isExpenseClaimsRoute = false;
  isPerformanceRoute = false;
  isWorkflowRoute = false;
  isReportsRoute = false;
  isengageRoute = false;
  isAddEmployeeRoute = false;
  isSalaryStatementRoute = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;

        this.isEmployeeRoute =
          url.includes('employee') || url.includes('salary-statement');

        this.isAddEmployeeRoute = url.includes('add-employee');
        this.isPayrollRoute = url.includes('payroll');
        this.isLeaveAttendanceRoute = url.includes('leave-attendance');
        this.isExpenseClaimsRoute = url.includes('expense-claims');
        this.isPerformanceRoute = url.includes('performance');
        this.isWorkflowRoute = url.includes('workflow');
        this.isReportsRoute = url.includes('reports');
        this.isengageRoute = url.includes('engage');
        this.isSalaryStatementRoute = url.includes('salary-statement');

        /* CLOSE ALL DROPDOWNS ON ROUTE CHANGE */
        this.isMainOpen = false;
        this.isInformationOpen = false;
        this.isAdminOpen = false;
        this.isSetupOpen = false;
        this.isMenuOpen = false;
        this.isSettingsOpen = false;
        this.activePayrollMenu = null;
      });
  }
  goToDashboard() {
    this.router.navigate(['/dashboard']);
    // 👆 change route if your dashboard route name is different
  }

  /* ===================== */
  /* SIDEBAR */
  /* ===================== */
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  /* PROFILE MENU */
  toggleMenu(event: Event) {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  /* SETTINGS MENU */
  toggleSettings(event: Event) {
    event.stopPropagation();
    this.isSettingsOpen = !this.isSettingsOpen;
  }

  /* ===================== */
  /* EMPLOYEE DROPDOWNS */
  /* ===================== */
  toggleMain(event: Event) {
    event.stopPropagation();
    this.isMainOpen = !this.isMainOpen;
  }

  toggleInformation(event: Event) {
    event.stopPropagation();
    this.isInformationOpen = !this.isInformationOpen;
  }

  toggleAdmin(event: Event) {
    event.stopPropagation();
    this.isAdminOpen = !this.isAdminOpen;
  }

  toggleSetup(event: Event) {
    event.stopPropagation();
    this.isSetupOpen = !this.isSetupOpen;
  }


  /* ===================== */
  /* PAYROLL DROPDOWNS */
  /* ===================== */
  togglePayroll(menu: string, event: Event) {
    event.stopPropagation();
    this.activePayrollMenu =
      this.activePayrollMenu === menu ? null : menu;
  }
  toggleLeaveMain(event: Event) {
    event.stopPropagation();
    this.isLeaveMainOpen = !this.isLeaveMainOpen;
  }
  toggleLeaveInfo(event: Event) {
    event.stopPropagation();
    this.isLeaveInfoOpen = !this.isLeaveInfoOpen;
  }
  toggleWorkflowModules(event: Event) {
    event.stopPropagation();
    this.isWorkflowModulesOpen = !this.isWorkflowModulesOpen;
  }
  toggleReports(event: Event) {
    event.stopPropagation();
    this.isReportsMenuOpen = !this.isReportsMenuOpen;
  }




  /* ===================== */
  /* CLOSE ON OUTSIDE CLICK */
  /* ===================== */
  @HostListener('document:click')
  closeAll() {
    this.isMenuOpen = false;
    this.isSettingsOpen = false;

    /* EMPLOYEE */
    this.isMainOpen = false;
    this.isInformationOpen = false;
    this.isAdminOpen = false;
    this.isSetupOpen = false;

    /* PAYROLL */
    this.activePayrollMenu = null;
    /* LEAVE */
    this.isLeaveMainOpen = false;
    this.isLeaveInfoOpen = false;
    /* WORKFLOW */
    this.isWorkflowModulesOpen = false;
    this.isReportsMenuOpen = false;

  }
}
