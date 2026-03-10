import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './authentication.html',
  styleUrls: ['./authentication.css']
})
export class Authentication {}


