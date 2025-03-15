import { Routes } from '@angular/router';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EnquiryFormComponent } from './components/enquiry-form/enquiry-form.component';
import { AdmissionFormComponent } from './components/admission-form/admission-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { FormEnquiryComponent } from './components/form-enquiry/form-enquiry.component';

export const routes: Routes = [
   { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
  {path :'home' , component : HomeComponent},
  {path: 'admin-login' , component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'enquiry', component: EnquiryFormComponent },
  { path: 'admission', component: AdmissionFormComponent },
  {path: 'form-enquiry' , component: FormEnquiryComponent}

      
];
export const appRoutingProviders = [
        provideRouter(routes, withComponentInputBinding())
      ];