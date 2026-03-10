import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.css']
})
export class AddEmployee {

  employee = {
    name: '',
    number: '',
    doj: '',
    location: '',
    email: ''
  };

  saveEmployee() {
    console.log(this.employee);
  }
}
