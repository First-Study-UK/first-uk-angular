import { findIndex, Subject } from 'rxjs';
import { RegisterService } from './../../shared/services/register.service';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { StudentService } from 'src/app/shared/services/student.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; 
import { HttpClient } from '@angular/common/http';
import { TimeService } from 'src/app/shared/services/timetable.service';
import { async } from '@firebase/util';

@Component({
  selector: 'app-student-info',
  templateUrl: './student-info.component.html',
  styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {



  calendarOptions: CalendarOptions
  dayMaxEvents: true
  posts = [];
  display = false
  datas:any
  eventInfo : any


  alldata:any
  allStudentsData:any
  singleStudentData:any
  singleInvoiceData:any
  singleRegister:any
  date1 =1

  displayPersonal= false;
  displayAcademic= false;
  displayOthers= false;

  class:any;
  yearGroup:any;
  tutor:any;
  gender:any
  selectedSubject:any
  selectedTutor:any
  selectedSubSubject:any
  selectedScheduleTime:any
  selectedScheduleDay:any



  constructor(
    private route: ActivatedRoute,
    private StudentService: StudentService,
    private IndividualPaymentInfo: InvoiceService,
    private IndividualRegister : RegisterService,
    private http: HttpClient,
    private timetable: TimeService 

    ) {}

  ngOnInit () {
    this.route.params.subscribe((params:any) => {
      this.timetable.getStudentTimeTable(params.id).subscribe((data)=>{
        this.datas = data

        let eventInfo = data.map((e,i)=> {
          return{
            title:  e.selectedClass.subject + `${e.selectedClass.subSubject ? ' -> '+ e.selectedClass.subSubject : ""}`,   
            // startTime:e.selectedClass.scheduleTime,
            startRecur:"2022-08-18T00:00:00",
            endRecur:"2022-08-26T00:00:00",
            color: '#282B6C',
            textColor:"white",
            daysOfWeek: [`${
              
                           e.selectedClass.scheduleDay.toLowerCase().substring(0, 3) == 'mon' ? 1 :
                           e.selectedClass.scheduleDay.toLowerCase().substring(0, 3) == 'tue' ? 2 :
                           e.selectedClass.scheduleDay.toLowerCase().substring(0, 3) == 'wed' ? 3 : 
                           e.selectedClass.scheduleDay.toLowerCase().substring(0, 3) == 'thu' ? 4 :
                           e.selectedClass.scheduleDay.toLowerCase().substring(0, 3) == 'fri' ? 5 :
                           e.selectedClass.scheduleDay.toLowerCase().substring(0, 3) == 'sat' ? 6 : 
                           e.selectedClass.scheduleDay.toLowerCase().substring(0, 3) == 'sun' ? 7 : ''
            }`],
          }
        })
        
        
         if(eventInfo){
              setTimeout(() => {
                this.calendarOptions = {
                  headerToolbar: {
                        right: 'prev,next today',
                        left: 'title',
                        center: 'dayGridMonth,timeGridWeek,timeGridDay'
                    },
        
                initialView: "dayGridMonth",
                contentHeight:"auto",
                dateClick: this.handleDateClick.bind(this),
                events: eventInfo,
                
                }
                
              },3000);
         }
      })


      
     });

      setTimeout( function() {
        window.dispatchEvent(new Event('resize'))
      }, 1)

      setTimeout(() => {
      
        return this.http.get('').subscribe(data => {
            this.posts.push(data);
        });
        }, 2000);


          this.route.params.subscribe((params:any) => {
            this.IndividualRegister.getIndividualRegister(params.id).subscribe(regdata => {
              this.singleRegister = regdata
              });
            this.StudentService.getIndividualStudent(params.id).then((studentdata)=>{
              this.singleStudentData = studentdata
              console.log(studentdata);
              
              this.IndividualPaymentInfo.getIndividualInvoice(studentdata)
              .subscribe(invoicedata => {
              });
            }) 


      
  }
  

  
  );
// get all student
  this.StudentService.getlAllStudent().subscribe((studentsdata)=>{
     this.allStudentsData = studentsdata 
  })

  this.IndividualPaymentInfo.getIndividualInvoice("hello")
   .subscribe(invoicedata => {
      this.singleInvoiceData =invoicedata
    });
  }

  handleDateClick(arg) {

    let clickDay = arg.date.toUTCString().toLowerCase().substring(0, 3) == 'sat' ? "sun" :
                   arg.date.toUTCString().toLowerCase().substring(0, 3) == 'sun' ? "mon" :
                   arg.date.toUTCString().toLowerCase().substring(0, 3) == 'mon' ? "tue" :
                   arg.date.toUTCString().toLowerCase().substring(0, 3) == 'tue' ? "wed" :
                   arg.date.toUTCString().toLowerCase().substring(0, 3) == 'wed' ? "thu" :
                   arg.date.toUTCString().toLowerCase().substring(0, 3) == 'thu' ? "fri" :
                   arg.date.toUTCString().toLowerCase().substring(0, 3) == 'fri' ? "sat" :

    this.display = true
    this.route.params.subscribe((params:any) => {
      this.timetable.getStudentTimeTable(params.id).subscribe((data)=>{
        let info = data.filter((item)=> item.scheduleDay.toLowerCase().substring(0, 3) == clickDay)
         this.posts= info
   
         
      })
  });
  }

// modal
  showPersonalDialog() {
      this.displayPersonal = true;  
  }
  showAcademicDialog(){
    this.displayAcademic= true;
  }
  showOthersDialog(){
    this.displayOthers= true;
  }

}
