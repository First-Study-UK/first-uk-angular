import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; 
import interactionPlugin from '@fullcalendar/interaction'; 
import listPlugin from '@fullcalendar/list';
import timeGridPlugin from '@fullcalendar/timegrid';
FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
  timeGridPlugin
]);
@NgModule({
  declarations: [
    TimetableComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    SliderModule,
    CalendarModule,
    ToastModule,
    TableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BreadcrumbModule,
    ConfirmDialogModule,
    InputNumberModule,
    RadioButtonModule,
    RatingModule,
    ToolbarModule,
    FileUploadModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    FullCalendarModule
  ],
  exports:[
    TimetableComponent
  ]
})
export class TimetableModule { }
