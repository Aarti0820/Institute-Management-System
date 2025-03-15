import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // ✅ Import FormsModule
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule (required for Angular directives)
import { FormEnquiryService } from '../../form-enquiry.service';

@Component({
  selector: 'app-form-enquiry',
  standalone: true, // ✅ Mark it as a standalone component
  templateUrl: './form-enquiry.component.html',
  styleUrls: ['./form-enquiry.component.css'],
  imports: [FormsModule, CommonModule ,], // ✅ Import FormsModule here
})
export class FormEnquiryComponent {
  enquiry = { name: '', email: '', message: '' };

  constructor(private enquiryService: FormEnquiryService) {}

  submitEnquiry() {
    this.enquiryService.addEnquiry(this.enquiry).subscribe(
      (response) => {
        alert('Enquiry submitted successfully!');
        this.enquiry = { name: '', email: '', message: '' }; // Reset form
      },
      (error) => {
        console.error('Error submitting enquiry:', error);
      }
    );
  }
}
