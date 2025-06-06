import { Component, inject, Inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { error } from 'console';
import { Customer } from '../../models/customer.model';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-customer-list',
  imports: [MatButtonModule, RouterModule, CommonModule, MatIconModule],
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.scss'
})
export class CustomerListComponent implements OnInit{
// inject customer service
  private customerService = inject(CustomerService);
// customer list
  customers!: Customer[]

  ngOnInit(): void {
      this.initData();
    }

    initData(): void {
      this.customerService.get().subscribe(
        data => {
          console.log('customers:', data);
          this.customers = data;
        },
        error => {
          console.error('Error fetching customers:', error);
        }
      );
    }

    onDeleteCustomer(customer: Customer) {
      if(window.confirm("Are you sure you want to delete the customer: " + customer.name + " ?")) {
        this.customerService.delete(customer._id, customer).subscribe(
          data => {
            this.initData(); // Refresh the customer list after deletion

          },
          error => {
            console.error('Error deleting customer:', error);
            // Optionally, you can show an error message to the user
          }
        )
      }
    }
}
