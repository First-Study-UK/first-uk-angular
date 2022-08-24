import { FooterModule } from './../footer/footer.module';
import { HeaderModule } from './../header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenubarComponent } from './menubar.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { TimetableModule } from '../../modules/timetable/timetable.module';
import { ExpenseModule } from '../../modules/expense/expense.module';
import { IncomeModule } from '../../modules/income/income.module';
import { SettingsModule } from '../../modules/settings/settings.module';
import { AccountsModule } from '../../modules/accounts/accounts.module';
import { RegisterModule } from '../../modules/register/register.module';
import { NewInvoiceModule } from '../../modules/new-invoice/new-invoice.module';
import { InvoicePrintModule } from '../../modules/invoice-print/invoice-print.module';
import { TeachersModule } from '../../modules/teachers/teachers.module';
import { InvoiceModule } from '../../modules/invoice/invoice.module';
import { TeacherInfoModule } from '../../modules/teacher-info/teacher-info.module';
import { SubjectsModule } from '../../modules/subjects/subjects.module';
import { StudentsModule } from '../../modules/students/students.module';
import { AddTeacherModule } from '../../modules/add-teacher/add-teacher.module';
import { AddStudentModule } from '../../modules/add-student/add-student.module';
import { StudentInfoModule } from '../../modules/student-info/student-info.module';
import { DashboardModule } from '../../modules/dashboard/dashboard.module';
import {AccordionModule} from 'primeng/accordion';
@NgModule({
  declarations: [
    MenubarComponent
  ],
  imports: [
    CommonModule,
    PanelMenuModule,
    DashboardModule,
    StudentInfoModule,
    AddStudentModule,
    AddTeacherModule,
    StudentsModule,
    TeacherInfoModule,
    InvoiceModule,
    TeachersModule,
    InvoicePrintModule,
    NewInvoiceModule,
    RegisterModule,
    AccountsModule,
    SubjectsModule,
    SettingsModule,
    IncomeModule,
    ExpenseModule,
    TimetableModule,
    HeaderModule,
    FooterModule,
    AccordionModule
  ],
  exports:[
    MenubarComponent
  ]
})
export class MenubarModule { 

  

}
