import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  // role logic
  activeRole: 'cio' | 'chro' | 'payroll' | 'manager' | 'employee' = 'cio';

  selectRole(role: 'cio' | 'chro' | 'payroll' | 'manager' | 'employee') {
    this.activeRole = role;
  }

  // region dropdown
  regionOpen = false;

  selectedRegion = {
    name: 'India',
    code: 'IN'
  };

  regions = [
    { name: 'India', code: 'IN' },
    { name: 'Middle East', code: 'ME' },
    { name: 'Indonesia (BH)', code: 'BH' },
    { name: 'Indonesia (EN)', code: 'EN' },
    { name: 'Singapore', code: 'SG' },
    { name: 'Malaysia', code: 'MY' }
  ];

  toggleRegion() {
    this.regionOpen = !this.regionOpen;
  }

  selectRegion(region: any) {
    this.selectedRegion = region;
    this.regionOpen = false;
  }

  // ✅ PARTNER DROPDOWN (MUST BE INSIDE CLASS)
  partnerOpen = false;

  togglePartner() {
    this.partnerOpen = !this.partnerOpen;
  }

  closePartner() {
    this.partnerOpen = false;
  }
  // RESOURCES DROPDOWN
resourcesOpen = false;

toggleResources() {
  this.resourcesOpen = !this.resourcesOpen;
}
// COMPANY DROPDOWN
companyOpen = false;

toggleCompany() {
  this.companyOpen = !this.companyOpen;
}

closeCompany() {
  this.companyOpen = false;
}
openDemo() {
  window.location.href =
    'https://www.greythr.com/demo/?gc_source=home&ac_form_tag=AF_DEMO_HOME&form_stage=collect_user_details';
}





}
