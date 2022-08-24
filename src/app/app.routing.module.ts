import { FooterComponent } from './default-layout/footer/footer.component';
import { HeaderComponent } from './default-layout/header/header.component';
import { LayoutComponent } from './default-layout/layout.component';
import { TimetableComponent } from './modules/timetable/timetable.component';
import { ExpenseComponent } from './modules/expense/expense.component';
import { IncomeComponent } from './modules/income/income.component';
import { SettingsComponent } from './modules/settings/settings.component';
import { AccountsComponent } from './modules/accounts/accounts.component';
import { RegisterComponent } from './modules/register/register.component';
import { NewInvoiceComponent } from './modules/new-invoice/new-invoice.component';
import { InvoicePrintComponent } from './modules/invoice-print/invoice-print.component';
import { InvoiceComponent } from './modules/invoice/invoice.component';
import { TeacherInfoComponent } from './modules/teacher-info/teacher-info.component';
import { SubjectsComponent } from './modules/subjects/subjects.component';
import { StudentsComponent } from './modules/students/students.component';
import { LoginComponent } from './public/login/login.component';
import { StudentInfoComponent } from './modules/student-info/student-info.component';
import { AddTeacherComponent } from './modules/add-teacher/add-teacher.component';
import { AddStudentComponent } from './modules/add-student/add-student.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersComponent } from './modules/teachers/teachers.component';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);


// const routes: Routes = [
//   {path : '', redirectTo:'login', pathMatch:'full'},
//   //{path : '', component : DashboardComponent,...canActivate(redirectUnauthorizedToLogin)},
//   { path : 'dashboard',component : DashboardComponent,...canActivate(redirectUnauthorizedToLogin) },
//   {path : 'addstudent', component : AddStudentComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'addteacher', component : AddTeacherComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'studentinfo/:id', component : StudentInfoComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'teachers', component : TeachersComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'login', component : LoginComponent,...canActivate(redirectLoggedInToHome)},
//   {path : 'students', component : StudentsComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'subjects', component : SubjectsComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'teacherinfo/:id', component : TeacherInfoComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'invoice/:id', component : InvoiceComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'invoiceprint/:id', component : InvoicePrintComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'newinvoice', component : NewInvoiceComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'registers', component : RegisterComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'settings', component : SettingsComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'income', component : IncomeComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'expense', component : ExpenseComponent,...canActivate(redirectUnauthorizedToLogin)},
//   {path : 'timetable', component: TimetableComponent,...canActivate(redirectUnauthorizedToLogin)}
// ];




const routes: Routes = [
  {path : '', redirectTo:'login', pathMatch:'full'},
  {path : '', component: LayoutComponent,
  
  children:[
    { path : 'dashboard',component : DashboardComponent,...canActivate(redirectUnauthorizedToLogin) },
    {path : 'addstudent', component : AddStudentComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'addteacher', component : AddTeacherComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'studentinfo/:id', component : StudentInfoComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'teachers', component : TeachersComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'login', component : LoginComponent,...canActivate(redirectLoggedInToHome)},
    {path : 'students', component : StudentsComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'subjects', component : SubjectsComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'teacherinfo/:id', component : TeacherInfoComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'invoice/:id', component : InvoiceComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'invoiceprint/:id', component : InvoicePrintComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'newinvoice', component : NewInvoiceComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'registers', component : RegisterComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'settings', component : SettingsComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'income', component : IncomeComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'expense', component : ExpenseComponent,...canActivate(redirectUnauthorizedToLogin)},
    {path : 'timetable', component: TimetableComponent,...canActivate(redirectUnauthorizedToLogin)}
  ]
},

    
  
];












@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
