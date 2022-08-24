import { TeacherService } from 'src/app/shared/services/teacher.service';
import { StudentService } from './../../shared/services/student.service';
import { Attendance } from './model/attendance';

import { RegisterService } from './../../shared/services/register.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Register } from './model/Register';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// breadcrumb
items = [{icon:"pi pi-home",label:'Register'}];
displayRegister= false
allRegisters: Array<Attendance>
attendance:any

// registr : Register;

registr ={
  date:'',
  day:'',
  time : '',
  tutorName : '',
  teacherId: '',
  attendances : new Array
};


plan:any
unplan:any
planned:any
unplaned:any
attended:any
day:any
tutors:any
selectedTutors:any
displayBasic2: boolean;
time:any


  constructor(
    private register : RegisterService,
    private StudentService: StudentService,
    private Teacher :TeacherService
    ) { 

      console.log(this.selectedTutors);
      
    this.day = [
      {name: "Monday",code:"01"},
      {name: "Tuesday",code:"02"},
      {name: "Wednesday",code:"03"},
      {name: "Thursday",code:"04"},
      {name: "Friday",code:"05"},
      {name: "Saturday",code:"06"},
      {name: "Sunday",code:"07"},
    
      ],

      this.time = [
        {name: "10 A.M",code:"01"},
        {name: "12 A.M",code:"02"},
        {name: "02 A.M",code:"03"},
        {name: "04 A.M",code:"04"},

      
        ],


    this.plan = [
        
      {name: 'John', code: '01'},
      {name: 'Kelly', code: '02'},
  ]
  this.unplan = [
    
    {name: 'John', code: '01'},
    {name: 'Kelly', code: '02'},
]
  }

  ngOnInit(): void {

// Take All Students Name and Id
    this.StudentService.getlAllStudent().subscribe(student => {
     this.attended = student.map((item)=> {
      return {
        name: item.studentInfo.fullName,
        code : item.studentInfo.studentId
      }
    })
       });

       this.Teacher.getAllteachers().subscribe(teacher => {
        this.tutors = teacher.map((item)=> {
         return {
           name: item.teacherInfo.fullName,
           code : item.teacherInfo.teacherId
         }
       })
    });


          
// Take All Register
    this.register.getRegister()
    .subscribe(res=>{
     this.allRegisters = res
     console.log(res);
     
    })
  }
  showRegisterDialog(){
    this.displayRegister = true
  }

  addRegister = new FormGroup({
    date: new FormControl(''),
    day: new FormControl(''),
    time: new FormControl(''),
    tutor: new FormControl(''),
    planMiss: new FormControl(''),
    unPlanMiss: new FormControl(''),
    attended: new FormControl('')
   })


   onSubmit(){
      this.registr.date = this.addRegister.value.date
      this.registr.day = this.addRegister.value.day.name
      this.registr.time = this.addRegister.value.time.name
      this.registr.tutorName = this.addRegister.value.tutor.name
      this.registr.teacherId =  this.selectedTutors.code

// console.log(this.addRegister.value.attended);

    for (const val of this.addRegister.value.attended) {
      const atten: Attendance = new Attendance();
      atten.studentId = val.code;
      atten.studentName = val.name;
      atten.status = 1
      this.registr.attendances.push(atten);
    }
    for (const val of this.addRegister.value.planMiss) {
      const atten: Attendance = new Attendance();
      atten.studentId = val.code;
      atten.studentName = val.name;
      atten.status = 2
      this.registr.attendances.push(atten);
    }
    for (const val of this.addRegister.value.unPlanMiss) {
      const atten: Attendance = new Attendance();
      atten.studentId = val.code;
      atten.studentName = val.name;
      atten.status = 3
      this.registr.attendances.push(atten);
    }


    this.register.PostRegister(this.registr)
    .subscribe(res => {
      this.displayRegister = false
      location.reload();
    })

   }
   



}
