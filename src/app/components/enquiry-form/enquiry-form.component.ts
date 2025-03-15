import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { EnquiryService } from '../../services/enquiry.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-enquiry-form',
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.css'],
  imports : [FormsModule , ReactiveFormsModule  ,CommonModule]
})
export class EnquiryFormComponent {
  enquiries: any[] = [];  // Holds all enquiries
  selectedEnquiry: any = null; // Holds a selected enquiry for view/edit

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit(): void {
    this.fetchAllEnquiries();
  }

  // Fetch all enquiries from backend
  fetchAllEnquiries() {
    this.enquiryService.getAllEnquiries().subscribe(
      (data) => {
        this.enquiries = data;
      },
      (error) => {
        console.error('Error fetching enquiries:', error);
      }
    );
  }
  

  // Select an enquiry to view details
  viewEnquiryDetails(enquiry: any) {
    this.selectedEnquiry = enquiry;
  }

  // Delete an enquiry
  deleteEnquiry(id: number) {
    if (confirm('Are you sure you want to delete this enquiry?')) {
      this.enquiryService.deleteEnquiry(id).subscribe(() => {
        alert('Enquiry deleted successfully');
        this.fetchAllEnquiries(); // Refresh the list
      });
    }
  }

  
}