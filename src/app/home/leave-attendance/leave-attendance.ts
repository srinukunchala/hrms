import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calander } from '../calander/calander';  

@Component({
  selector: 'app-leave-attendance',
  standalone: true,
  imports: [CommonModule, Calander],
  templateUrl: './leave-attendance.html',
  styleUrls: ['./leave-attendance.css']
})
export class LeaveAttendance { }


