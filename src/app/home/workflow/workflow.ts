import { Component } from '@angular/core';
import { Calander } from '../calander/calander';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-workflow',
  imports: [CommonModule, Calander],
  templateUrl: './workflow.html',
  styleUrl: './workflow.css',
})
export class Workflow {

}
