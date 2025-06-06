import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LangingPageRoutingModule } from './langing-page-routing.module';
import { ComponentsModule } from '../components/components.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LangingPageRoutingModule,
    ComponentsModule,
    SharedModule,
    ComponentsModule
  ]
})
export class LangingPageModule { }
