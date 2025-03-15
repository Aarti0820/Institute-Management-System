import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FormEnquiryService {

  constructor(private http: HttpClient) { }

   private baseUrl2 = 'http://localhost:8080/api/enquiries/submit'; // Adjust if needed

   addEnquiry(enquiry: any): Observable<any> {
    return this.http.post(`${this.baseUrl2}`, enquiry);
  }
}
