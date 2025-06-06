import { Component } from '@angular/core';
import { CustomerListComponent } from "../../components/customer-list/customer-list.component";

@Component({
  selector: 'app-main-page',
  imports: [CustomerListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
