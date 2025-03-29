import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private enquiryUrl = 'http://localhost:8080/api/enquiries/all';
  private admissionUrl = 'http://localhost:8080/admission/all';

  constructor(private http: HttpClient) {}

  getEnquiries(): Observable<any[]> {
    return this.http.get<any[]>(this.enquiryUrl);
  }

  getAdmissions(): Observable<any[]> {
    return this.http.get<any[]>(this.admissionUrl);
  }
}
