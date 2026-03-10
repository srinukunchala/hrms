import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mass-communication',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mass-communication.html',
  styleUrls: ['./mass-communication.css']
})
export class MassCommunication {

  messages = [
    {
      category: 'Notification',
      subject: '7 April is a holiday due to bandh',
      type: 'Email, SMS',
      date: '31 Mar 2017'
    },
    {
      category: 'Notification',
      subject: 'IT Declaration for FY 2014-15',
      type: 'Email',
      date: '14 Apr 2014'
    },
    {
      category: 'Notification',
      subject: 'IT Declaration for FY 2015-16',
      type: 'Email',
      date: '31 Mar 2017'
    },
    {
      category: 'Notification',
      subject: 'IT Declaration for FY 2016-17',
      type: 'Email',
      date: '31 Mar 2017'
    },
    {
      category: 'General',
      subject: 'Townhall meeting - 7 April @ 4pm',
      type: 'Email, SMS',
      date: '31 Mar 2017'
    }
  ];
}
