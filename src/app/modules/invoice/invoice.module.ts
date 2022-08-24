import { InvoiceComponent } from './invoice.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {TableModule} from 'primeng/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextareaModule} from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    MultiSelectModule,
    DialogModule,
    SliderModule,
    CalendarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BreadcrumbModule,
    InputNumberModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  exports:[
    InvoiceComponent
  ]
})
export class InvoiceModule { }
