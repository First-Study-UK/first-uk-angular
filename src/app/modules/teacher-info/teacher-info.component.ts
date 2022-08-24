import { TimeService } from 'src/app/shared/services/timetable.service';
import { HttpClient } from '@angular/common/http';
import { RegisterService } from './../../shared/services/register.service';
import { TeacherService } from './../../shared/services/teacher.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/angular'; 
@Component({
  selector: 'app-teacher-info',
  templateUrl: './teacher-info.component.html',
  styleUrls: ['./teacher-info.component.css']
})
export class TeacherInfoComponent implements OnInit {


  date1: Date;



  allTeacherData:any
  singleTeacher:any
  singleRegister:any
  displayPersonal= false;
  displayAcademic= false;
  displayOthers= false;
  class:any;
  yearGroup:any;
  tutor:any;
  gender:any
  selectSubject:any

  schedualeDay:any
  schedualeTime:any
  hourlyRate=''
  avgHour=''

  calendarOptions: CalendarOptions
  dayMaxEvents: true
  posts = [];
  display = false
  datas:any
  eventInfo : any

  constructor(
    private TeacherService:TeacherService,
    private route: ActivatedRoute,
    private register : RegisterService,
    private http :HttpClient,
    private timetable :TimeService
    ) {
        
    this.schedualeDay = [
      {name: 'Saturday', code: '01'},
      {name: 'Sunday', code: '02'},

  ];
  this.schedualeTime = [
    {name: '10.00am - 11.00am', code: '01'},
    {name: '11.00am - 12.00pm', code: '02'},

];
  this.selectSubject = [
    {name: 'English', code: '01'},
    {name: 'Math', code: '02'},
    {name: 'Physics', code: '03'},

];
  this.yearGroup = [
    {name: "Year 01",code:"01"},
    {name: "Year 02",code:"02"},

];
this.tutor = [
  {name: "Alex",code:"01"},
  {name: "Jone",code:"02"},
];
}

ngOnInit() {
this.route.params.subscribe((params:any) => {
    this.register.getIndividualTeacherRegister(params.id).subscribe(regdata => {
      this.singleRegister = regdata
      console.log(regdata);
      });
this.TeacherService.getIndividualTeacher(params.id).subscribe((teacherdata)=>{
      this.singleTeacher = teacherdata  
    })
});
this.TeacherService.getAllteachers().subscribe((teacherData)=>{
   this.allTeacherData = teacherData 
})

// /// teacher TimeTable Start

this.route.params.subscribe((params:any) => {
  this.timetable.getTeacherTimeTable(params.id).subscribe((data)=>{
    this.datas = data

    let eventInfo = data.map((e,i)=> {
      return{
        title:  e.subject + `${e.subSubject ? ' -> '+ e.subSubject : ""}`,   
        allDay:false,
        startTime:e.scheduleTime.substring(11, 19),
        color: '#282B6C',
        textColor:"white",
        daysOfWeek: [`${
          
                       e.scheduleDay.toLowerCase().substring(0, 3) == 'mon' ? 1 :
                       e.scheduleDay.toLowerCase().substring(0, 3) == 'tue' ? 2 :
                       e.scheduleDay.toLowerCase().substring(0, 3) == 'wed' ? 3 : 
                       e.scheduleDay.toLowerCase().substring(0, 3) == 'thu' ? 4 :
                       e.scheduleDay.toLowerCase().substring(0, 3) == 'fri' ? 5 :
                       e.scheduleDay.toLowerCase().substring(0, 3) == 'sat' ? 6 : 
                       e.scheduleDay.toLowerCase().substring(0, 3) == 'sun' ? 7 : ''
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
            nextDayThreshold: '09:00:00',
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
}

handleDateClick(arg) {
  let clickDay = arg.date.toUTCString().toLowerCase().substring(0, 3) == 'sat' ? "sun" :
                 arg.date.toUTCString().toLowerCase().substring(0, 3) == 'sun' ? "mon" :
                 arg.date.toUTCString().toLowerCase().substring(0, 3) == 'mon' ? "tue" :
                 arg.date.toUTCString().toLowerCase().substring(0, 3) == 'tue' ? "wed" :
                 arg.date.toUTCString().toLowerCase().substring(0, 3) == 'wed' ? "thu" :
                 arg.date.toUTCString().toLowerCase().substring(0, 3) == 'thu' ? "fri" :
                 arg.date.toUTCString().toLowerCase().substring(0, 3) == 'fri' ? "sat" :

  console.log(arg.date.toUTCString().toLowerCase().substring(0, 3));
  this.display = true
  this.route.params.subscribe((params:any) => {
    this.timetable.getTeacherTimeTable(params.id).subscribe((data)=>{
      let info = data.filter((item)=> item.scheduleDay.toLowerCase().substring(0, 3) == clickDay)
       this.posts= info
    })
});
}

// /// teacher TimeTable End





// breadcrumb
items = 
[
  {label:'All Students'},
  {label:'Salman Sha (FS- 255)'},
 ];

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

