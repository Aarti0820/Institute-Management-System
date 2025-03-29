import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../../services/dashboard.service';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports:[NgxChartsModule],
})
export class DashboardComponent implements OnInit {
  enquiries: any[] = [];
  admissions: any[] = [];
  admissionsChartData: any[] = [];
  enquiriesChartData: any[] = [];

  constructor(private dashboardService: DashboardService, private router: Router) {}

  ngOnInit(): void {
    this.fetchAdmissions();
    this.fetchEnquiries();
  }

  fetchAdmissions() {
    this.dashboardService.getAdmissions().subscribe(data => {
      this.admissions = data.slice(-5);
      this.prepareAdmissionsChart(data);
    });
  }

  fetchEnquiries() {
    this.dashboardService.getEnquiries().subscribe(data => {
      this.enquiries = data.slice(-5);
      this.prepareEnquiriesChart(data);
    });
  }

  prepareAdmissionsChart(data: any[]) {
    const courseCounts: { [key: string]: number } = {};
    data.forEach(admission => {
      const course = admission.course;
      courseCounts[course] = (courseCounts[course] || 0) + 1;
    });
    this.admissionsChartData = Object.keys(courseCounts).map(course => ({
      name: course,
      value: courseCounts[course],
    }));
  }

  prepareEnquiriesChart(data: any[]) {
    const courseCounts: { [key: string]: number } = {};
    data.forEach(enquiry => {
      const course = enquiry.course;
      courseCounts[course] = (courseCounts[course] || 0) + 1;
    });
    this.enquiriesChartData = Object.keys(courseCounts).map(course => ({
      name: course,
      value: courseCounts[course],
    }));
  }

  // Button Navigation
  navigateToFees() {
    this.router.navigate(['/fees-structure']);
  }

  navigateToAdmission() {
    this.router.navigate(['/admission']);
  }

  navigateToStudents() {
    this.router.navigate(['/readdata']);
  }
}
