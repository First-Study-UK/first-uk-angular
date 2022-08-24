import { TimeService } from 'src/app/shared/services/timetable.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; 
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  items:any
  calendarOptions: CalendarOptions
  dayMaxEvents: true
  posts = [];
  display = false
  datas:any




  constructor(
    private http: HttpClient,
    private timetable: TimeService,
    private route: ActivatedRoute,
  ) { }






  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.timetable.getMasterTimetable().subscribe((data)=>{
        this.datas = data
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
  setTimeout(() => {
    this.calendarOptions = {
      headerToolbar: {
            right: 'prev,next today',
            left: 'title',
            center: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
    initialView: 'dayGridMonth',
    contentHeight:"80vh" ,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      { title: 'math', date: '2022-01-04', start: '2022-07-04T13:00:00'},
      { title: 'english', date: '2022-07-04', start: '2022-07-04T15:00:00'},
    ]
    };
    
  }, 3000);
  }



  handleDateClick(arg) {
    this.display = true
    console.log(arg.date.toUTCString().substring(0, 3));
    this.route.params.subscribe((params:any) => {
      this.timetable.getMasterTimetable().subscribe((data)=>{
        // this.posts = data.
        // this.datas = data
      
        let info = data .filter((item)=> item.scheduleDay.substring(0, 3) == arg.date.toUTCString().substring(0, 3))
        
         this.posts= info
        
      })
  });
  }
}
