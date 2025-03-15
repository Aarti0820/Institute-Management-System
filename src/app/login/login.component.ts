import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.email === 'admin@gmail.com' && this.password === 'admin123') {
      alert('Login Successful');
      this.router.navigate(['/dashboard']); // Redirect to Dashboard
    } else {
      alert('Invalid Email or Password');
    }
  }
}


