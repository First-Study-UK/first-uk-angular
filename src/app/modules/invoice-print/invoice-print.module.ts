import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicePrintComponent } from './invoice-print.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {DialogModule} from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import {ButtonModule} from 'primeng/button';
import {InputTextareaModule} from 'primeng/inputtextarea';
@NgModule({
  declarations: [
    InvoicePrintComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    DialogModule,
    InputNumberModule,
    InputTextareaModule,
    ButtonModule,
  ],
  exports:[
    InvoicePrintComponent
  ]
})
export class InvoicePrintModule { }
