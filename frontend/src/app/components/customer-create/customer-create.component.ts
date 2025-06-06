import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatIconModule } from '@angular/material/icon';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-create',
  imports: [MatButtonModule, RouterModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './customer-create.component.html',
  styleUrl: './customer-create.component.scss'
})
export class CustomerCreateComponent implements OnInit {
  form!: FormGroup;
  router = inject(Router);

  private customerService = inject(CustomerService);
  
  
  ngOnInit(): void {
    // Initialize the form here
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.required),
      // address: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.customerService.post(this.form.value).subscribe(
        data => {
          console.log('Customer created successfully:', data);
          // Optionally, you can navigate to the customer list or show a success message
          this.router.navigate(['/']);
        },
        error => {
          console.error('Error creating customer:', error);
          // Optionally, you can show an error message to the user
        }
      );
    }
  }
}
