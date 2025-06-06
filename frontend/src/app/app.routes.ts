import { Routes } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { CustomerCreateComponent } from './components/customer-create/customer-create.component';
import { CustomerEditComponent } from './components/customer-edit/customer-edit.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { MainPageComponent } from './langing-page/main/main-page.component';
import { LandingComponent } from './langing-page/landing/landing.component';

export const routes: Routes = [
    
    // {
    //     path: '',
    //     loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule)
    // },
    // {
    //     path: '',
    //     loadChildren: () => import('./langing-page/langing-page.module').then(m => m.LangingPageModule)
    // },
    // {
    //     path: 'home',
    //     component: LandingComponent
    // },
    // {
    //     path: '',
    //     redirectTo: 'home',
    //     pathMatch: 'full'
    // }
    
    {
        path: '',
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
