import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableRoutingModule } from './table-routing.module';
import { SimpleComponent } from './simple/simple.component';
import { ServiceComponent } from './service/service.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    SimpleComponent,
    ServiceComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    TableRoutingModule
  ]
})
export class TableModule { }
