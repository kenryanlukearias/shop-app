import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-edit',
  imports: [CommonModule, MatButtonModule, RouterModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './customer-edit.component.html',
  styleUrl: './customer-edit.component.scss'
})

export class CustomerEditComponent implements OnInit {
  private activatedCustomer = inject(ActivatedRoute);
  private customerService = inject(CustomerService);
  customer!: Customer;
  customerId!: string;
  form!: FormGroup;
  router = inject(Router);

  ngOnInit(): void {
    // Fetch customer details using the customerId
    this.customerId = this.activatedCustomer.snapshot.params['id'];
    // form init
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      phone: new FormControl('', Validators.required),
      // address: new FormControl('', Validators.required)
    });

    if (this.customerId) {
      this.customerService.getById(this.customerId).subscribe(
        data => {
          this.customer = data;
          this.form.patchValue(this.customer);
        },
        error => {
          console.error('Error fetching customer details:', error);
          // Optionally, you can show an error message to the user
        }
      )
    }

    // Initialize the form here
    

    console.log('Customer ID:', this.customerId);
  }

  onSubmit() {
    if (this.form.valid) {
      this.customerService.put(this.customerId, this.form.value).subscribe(
        data => {
          console.log('Customer updated successfully:', data);
          // Optionally, you can navigate to the customer list or show a success message
          this.router.navigate(['/']);

        },
        error => {
          console.error('Error updating customer:', error);
          // Optionally, you can show an error message to the user
        }
      );
    }
  }
}
