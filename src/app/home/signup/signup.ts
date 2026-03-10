import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {

  constructor(private router: Router) {}

 // MULTI STEP
  currentStep = 1;

  // OTP UI STATE
  isOtpSent = false;

  goToStep2() {
    this.currentStep = 2;
  }

  goBack() {
    this.currentStep = 1;
    this.isOtpSent = false;
  }

  getOtp() {
    this.isOtpSent = true; // UI only
  }

  submitForm() {
    this.router.navigate(['/mainboard']);
  }

  // -------------------------
  // FAQ SECTION
  // -------------------------
  faqs = [
    {
      question: 'What features are included in the greytHR free trial?',
      answer:
        'The greytHR free trial includes access to essential HR modules such as employee records, payroll management, leave and attendance tracking, employee self-service portal, and basic reporting features.',
      open: true
    },
    {
      question: 'How long does the greytHR free trial last?',
      answer: 'The greytHR free trial lasts for 7 days.',
      open: false
    },
    {
      question: 'Is the free trial fully functional?',
      answer:
        'Yes, the free trial is fully functional with access to Enterprise features and dummy data.',
      open: false
    },
    {
      question:
        'Do I need to provide credit card information to start the free trial?',
      answer:
        'No, you do not need to provide any credit card details to start the free trial.',
      open: false
    },
    {
      question: 'Can I upgrade to a paid plan during the free trial?',
      answer:
        'Yes, you can upgrade to a paid plan at any time during your free trial.',
      open: false
    },
    {
      question: 'What happens to my data after the free trial ends?',
      answer:
        'Your data will remain safe and accessible. You can choose to upgrade to continue using the platform.',
      open: false
    },
    {
      question: 'How can I get support during the free trial?',
      answer:
        'You will get full support via chat, email, and onboarding assistance during the trial.',
      open: false
    },
    {
      question:
        'Are there any limitations on the number of users during the free trial?',
      answer:
        'No, the free trial allows you to explore the platform without user limitations.',
      open: false
    },
    {
      question:
        'Can I import my existing data into greytHR during the free trial?',
      answer:
        'Yes, you can import your employee data and explore features using real or dummy data.',
      open: false
    },
    {
      question:
        'What if I don’t want to import data or create my org? Can I still try features?',
      answer:
        'Absolutely. greytHR provides prefilled dummy data so you can explore all features instantly.',
      open: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

}
