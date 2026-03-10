import { Routes } from '@angular/router';
import { Dashboard } from './home/dashboard/dashboard';
import { Authentication } from './home/authentication/authentication';
import { Signup } from './home/signup/signup';
import { Mainboard } from './home/mainboard/mainboard';
import { Welcome } from './home/welcome/welcome';
import { DhCharts } from './home/dh-charts/dh-charts';
import { Employee } from './home/employee/employee';
import { Payroll } from './home/payroll/payroll';
import { LeaveAttendance } from './home/leave-attendance/leave-attendance';
import { ExpenseClaims } from './home/expense-claims/expense-claims';
import { Performance } from './home/performance/performance';
import { Workflow } from './home/workflow/workflow';
import { Reports } from './home/reports/reports';
import { Engage } from './home/engage/engage';
import { AddEmployee } from './home/welcome/add-employee/add-employee';
import { UpdatePayrollData } from './home/welcome/update-payroll-data/update-payroll-data';
import { ProcessPayroll } from './home/welcome/process-payroll/process-payroll';
import { SalaryStatement } from './home/welcome/salarystatement/salarystatement';
import { Calander } from './home/calander/calander';
import { Mainhub } from './home/employee/mainhub/mainhub';
import { GenerateLetter } from './home/employee/generate-letter/generate-letter';
import { ExcelImport } from './home/employee/excel-import/excel-import';
import { BulletinBoard } from './home/employee/bulletin-board/bulletin-board';
import { MassCommunication } from './home/employee/mass-communication/mass-communication';
import { CompanyPolicies } from './home/employee/company-policies/company-policies';




export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: Dashboard
  },

  {
    path: 'signup',
    component: Signup
  },
  {
    path: 'authentication',
    component: Authentication
  },
  {
    path: 'calander',
    component: Calander
  },
  {
    path: 'mainboard',
    component: Mainboard,
    children: [
      {
        path: 'welcome',
        component: Welcome,

      },
      {
        path: 'add-employee',
        component: AddEmployee
      },

      {
        path: 'dh-charts',
        component: DhCharts
      },
      {
        path: 'employee',
        component: Employee,
        children: [
          {
            path: 'main/mainhub',
            component: Mainhub
          },
          {
            path: 'admin/generate-letter',
            component: GenerateLetter
          },
          {
            path: 'admin/excel-import',
            component: ExcelImport
          },
          {
            path: 'bulletin-board',
            component: BulletinBoard
          },
          {
            path: 'admin/mass-communication',
            component: MassCommunication
          },
          {
            path: 'setup/company-policies',
            component: CompanyPolicies
          }

        ]
      },
      {
        path: 'payroll',
        component: Payroll,
          
      },
      {
        path: 'update-payroll-data',
        component: UpdatePayrollData
      },
      {
        path: 'process-payroll',
        component: ProcessPayroll
      },
      {
        path: 'salary-statement',
        component: SalaryStatement
      },


      {
        path: 'leave-attendance',
        component: LeaveAttendance
      },
      {
        path: 'expense-claims',
        component: ExpenseClaims
      },

      {
        path: 'performance',
        component: Performance
      },
      {
        path: 'workflow',
        component: Workflow
      },
      {
        path: 'reports',
        component: Reports
      },
      {
        path: 'engage',
        component: Engage
      },



      {
        path: '', redirectTo: 'welcome',
        pathMatch: 'full'
      }
    ]
  }

];
