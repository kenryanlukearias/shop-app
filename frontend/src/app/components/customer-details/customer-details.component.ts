import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-customer-details',
  imports: [CommonModule, RouterLink],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent implements OnInit {

  private activatedCustomer = inject(ActivatedRoute);
  private customerService = inject(CustomerService);
  customer!: Customer;
  customerId!: string;

  ngOnInit(): void {
    // Fetch customer details using the customerId
    this.customerId = this.activatedCustomer.snapshot.params['id'];
    if (this.customerId) {
      this.customerService.getById(this.customerId).subscribe(
        data => {
          this.customer = data;
        },
        error => {
          console.error('Error fetching customer details:', error);
          // Optionally, you can show an error message to the user
        }
      )
    }
    console.log('Customer ID:', this.customerId);
  }
}
