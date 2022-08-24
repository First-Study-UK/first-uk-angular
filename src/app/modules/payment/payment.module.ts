import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';


@NgModule({
  declarations: [
    PaymentComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    ProgressBarModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    ContextMenuModule,
    MultiSelectModule,
    DialogModule,
    SliderModule,
    CalendarModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  exports:[
    PaymentComponent
  ]
})
export class PaymentModule { }
