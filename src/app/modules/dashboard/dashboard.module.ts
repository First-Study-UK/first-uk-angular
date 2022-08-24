
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { SidebarRightModule } from '../sidebar-right/sidebar-right.module';
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
import {ChartModule} from 'primeng/chart';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    SidebarRightModule,
    CalendarModule,
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
    ToastModule,
    ChartModule,
    ReactiveFormsModule,
    FormsModule,
    ProgressSpinnerModule,
  ],
  exports:[
    DashboardComponent
  ]
})
export class DashboardModule { }
