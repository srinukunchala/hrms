import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calander } from '../calander/calander';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, Calander],
  templateUrl: './reports.html',
  styleUrls: ['./reports.css']
})
export class Reports {}
