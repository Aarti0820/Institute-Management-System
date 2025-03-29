import { Component, OnInit } from '@angular/core';
import { AdmissionService } from '../../services/admission.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admission-form',
  imports: [ CommonModule , ReactiveFormsModule],
  templateUrl: './admission-form.component.html',
  styleUrl: './admission-form.component.css'
})
export class AdmissionFormComponent implements OnInit{

  admissionForm!: FormGroup;
  isSubmitting: boolean = false;

  constructor(private fb: FormBuilder, private admissionService: AdmissionService) {}

  ngOnInit(): void {
    this.admissionForm = this.fb.group({
      studentName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      qualification: ['', Validators.required],
      branch: ['', Validators.required],
      course: ['', Validators.required],
      address: ['', Validators.required],
      admissionDate: ['', Validators.required],
      batchTime: ['', Validators.required],
      batchMode: ['', Validators.required],
      totalFees: ['', Validators.required],
      facultyName: ['', Validators.required],
      authorityName: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.admissionForm.invalid) {
      alert("Please fill all required fields correctly.");
      return;
    }

    this.isSubmitting = true;
    this.admissionService.submitAdmission(this.admissionForm.value).subscribe(
      response => {
        alert("Admission form submitted successfully!");
        this.admissionForm.reset();
      },
      error => {
        console.error("Error submitting admission:", error);
        alert("Failed to submit the form. Please try again.");
      }
    ).add(() => {
      this.isSubmitting = false;
    });
  }
}