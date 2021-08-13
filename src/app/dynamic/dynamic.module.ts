import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { FormComponent } from './form/form.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    DynamicRoutingModule
  ]
})
export class DynamicModule { }
