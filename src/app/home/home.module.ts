import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PoModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
