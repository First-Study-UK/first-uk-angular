import { CardModule } from 'primeng/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarRightComponent } from './sidebar-right.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {RippleModule} from 'primeng/ripple';
@NgModule({
  declarations: [
    SidebarRightComponent
  ],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule,
    CardModule,
    DialogModule,
    ReactiveFormsModule,
    RippleModule,
    ProgressSpinnerModule
  ],
  exports:[
    SidebarRightComponent
  ]
})
export class SidebarRightModule { }
