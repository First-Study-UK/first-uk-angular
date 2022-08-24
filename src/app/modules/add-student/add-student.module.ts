import { TableModule } from 'primeng/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student.component';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {FileUploadModule} from 'primeng/fileupload';
@NgModule({
  declarations: [AddStudentComponent],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule,
    DialogModule,
    ReactiveFormsModule,
    BreadcrumbModule,
    FileUploadModule,
    TableModule
  ],
  exports:[
    AddStudentComponent
  ]
})
export class AddStudentModule { 


}
