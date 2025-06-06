import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

const routes: Routes = [
  {
        path: 'customers',
        component: CustomerListComponent
    },
    {
        path: 'create',
        component: CustomerCreateComponent
    },
    {
        path: 'edit/:id',
        component: CustomerEditComponent
    },
    {
        path: 'details/:id',
        component: CustomerDetailsComponent
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
