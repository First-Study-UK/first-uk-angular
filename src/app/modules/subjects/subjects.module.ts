import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectsComponent } from './subjects.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {SkeletonModule} from 'primeng/skeleton';
import {DialogModule} from 'primeng/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SubjectsComponent
  ],
  imports: [
    CommonModule,
    BreadcrumbModule,
    TableModule,
    SkeletonModule,
    InputTextModule,
    ProgressBarModule,
    DropdownModule,
    ButtonModule,
    DialogModule,
    ContextMenuModule,
    MultiSelectModule,
    SliderModule,
    CalendarModule,
    ToastModule,
    ReactiveFormsModule
  ],
  exports:[
    SubjectsComponent
  ]
})
export class SubjectsModule { }
