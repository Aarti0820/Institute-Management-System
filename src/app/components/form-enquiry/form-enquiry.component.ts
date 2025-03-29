import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormEnquiryService } from '../../form-enquiry.service';

@Component({
  selector: 'app-form-enquiry',
  standalone: true,
  templateUrl: './form-enquiry.component.html',
  styleUrls: ['./form-enquiry.component.css'],
  imports: [FormsModule, CommonModule], // ✅ Ensure HttpClientModule is here
})
export class FormEnquiryComponent {
  enquiry = {
    studentName: '',
    email: '',
    phone: '',
    address: '',
    qualification: '',
    branch: '',
    passoutYear: '',
    experience: '',
    course: '',
    admissionDate: '',
    batchMode: '',
    message: ''
  };

  constructor(private enquiryService: FormEnquiryService) {}

  submitEnquiry() {
    this.enquiryService.addEnquiry(this.enquiry).subscribe(
      (response) => {
        alert('Enquiry submitted successfully!');
        this.resetForm();
      },
      (error) => {
        console.error('Error submitting enquiry:', error);
      }
    );
  }

  resetForm() {
    this.enquiry = {
      studentName: '',
      email: '',
      phone: '',
      address: '',
      qualification: '',
      branch: '',
      passoutYear: '',
      experience: '',
      course: '',
      admissionDate: '',
      batchMode: '',
      message: ''
    };
  }
}
