import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Calander } from '../calander/calander';

@Component({
  selector: 'app-performance',
  imports: [CommonModule, Calander],
  templateUrl: './performance.html',
  styleUrl: './performance.css',
})
export class Performance {

}
