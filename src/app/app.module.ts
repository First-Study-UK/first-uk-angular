
import { LoginModule } from './public/login/login.module';
import { LayoutModule } from './default-layout/layout.module';
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app.routing.module';
import { HotToastModule } from '@ngneat/hot-toast';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // DashboardModule,
    // StudentInfoModule,
    // AddStudentModule,
    // AddTeacherModule,
    // StudentsModule,
    // TeacherInfoModule,
    // InvoiceModule,
    // TeachersModule,
    // InvoicePrintModule,
    // NewInvoiceModule,
    // RegisterModule,
    // AccountsModule,
    // SubjectsModule,
    // SettingsModule,
    // IncomeModule,
    // ExpenseModule,
    // TimetableModule,
    
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    LayoutModule,
    HotToastModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
