import { BreadcrumbModule } from 'primeng/breadcrumb';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import {StepsModule} from 'primeng/steps';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    StepsModule,
    DialogModule,
    InputTextModule,
    ButtonModule
  ],
  exports:[
    TeachersComponent
  ]
})
export class TeachersModule { }
