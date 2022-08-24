import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInfoComponent } from './student-info.component';
import {TabViewModule} from 'primeng/tabview';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {MultiSelectModule} from 'primeng/multiselect';
import {DialogModule} from 'primeng/dialog';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { PaymentModule } from '../payment/payment.module';
import { ChipModule } from 'primeng/chip';
import {TableModule} from 'primeng/table';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
import {BadgeModule} from 'primeng/badge';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  timeGridPlugin
]);


@NgModule({
  declarations: [StudentInfoComponent],
  imports: [
    CommonModule,
    TabViewModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    ButtonModule,
    MultiSelectModule,
    DialogModule,
    BreadcrumbModule,
    PaymentModule,
    ChipModule,
    TableModule,
    FullCalendarModule,
    BadgeModule
  ],
  exports:[
    StudentInfoComponent
  ]
})
export class StudentInfoModule { }
