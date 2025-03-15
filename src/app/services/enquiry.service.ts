import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'  // This makes the service available globally
})
export class EnquiryService {

  private baseUrl = 'http://localhost:8080/api/enquiries/all'; // Backend API URL
 


  constructor(private http: HttpClient) { }


  // Get all enquiries
  getAllEnquiries(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  // Get a single enquiry by ID
  getEnquiryById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  // Create a new enquiry
  createEnquiry(enquiry: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, enquiry);
  }

  // Update an enquiry
  updateEnquiry(id: number, enquiry: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, enquiry);
  }

  // Delete an enquiry
  deleteEnquiry(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }


  

 

 
}

