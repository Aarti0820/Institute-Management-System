import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormEnquiryService {
  private baseUrl2 = 'http://localhost:8080/api/enquiries/submit'; // ✅ Ensure this URL is correct

  constructor(private http: HttpClient) {}

  addEnquiry(enquiry: any): Observable<any> {
    return this.http.post(this.baseUrl2, enquiry);
  }
}
