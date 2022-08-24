import { TableModule } from 'primeng/table';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import { AddTeacherComponent } from './add-teacher.component';
@NgModule({
  declarations: [
    AddTeacherComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule,
    DialogModule,
    InputNumberModule,
    ReactiveFormsModule,
    TableModule
  ],
  exports:[
    AddTeacherComponent
  ]
})
export class AddTeacherModule { }
