import { CoursesService } from 'src/app/shared/services/courses.service';
import { Router } from '@angular/router';

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { TeacherService } from 'src/app/shared/services/teacher.service';




@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {
 

  maxDateValue = new Date();
  teacherID = this.createId()
  teachers:any
  displayBasic2: boolean;
  day:any
  subjects:any
  subSubject:any
  displayPersonal= false;
  displayAcademic= false;
  displayOthers= false;
  class:any;
  yearGroup:any;
  tutor:any;
  selectedInfo: any;
  infoList = [];
  gender:any;
  scday:any;
  sctime:any;
  subject:any;
  subsubject:any;
  hourlyRate:"";
  avgHour:''
  
  constructor(
    private teacherService: TeacherService,
    private formbuilder: FormBuilder,
    private router :Router,
    private subjectservice : CoursesService
    ) {
    this.yearGroup = [
    {name: "Year 01",code:"01"},
    {name: "Year 02",code:"02"},
    {name: "Year 03",code:"03"},
    {name: "Year 04",code:"04"},
    {name: "Year 05",code:"05"},
    ],
    this.gender = [
    {name: "Male",code:"01"},
    {name: "Female",code:"02"},
    {name: "Other",code:"03"},
    ]
    this.day = [
      {name: "Sunday",code:"01"},
      {name: "Monday",code:"02"},
      {name: "Tuesday",code:"03"},
      {name: "Wednesday",code:"04"},
      {name: "Thusday",code:"05"},
      {name: "Friday",code:"06"},
      {name: "Saturday",code:"07"},
      ]
  this.sctime = [
        {name: "09.00am - 10.00am",code:"10.00am"},
        {name: "10.00am - 11.00am",code:"11.00am"},
        {name: "11.00am - 12.00pm",code:"12.00pm"},
        {name: "12.00am - 13.00pm",code:"12.00pm"},
        {name: "13.00pm - 14.00pm",code:"13.00pm"},
        {name: "14.00pm - 15.00pm",code:"15.00pm"},
        {name: "15.00pm - 16.00pm",code:"17.00pm"},
        {name: "16.00pm - 17.00pm",code:"19.00pm"},
        ]
}

ngOnInit(): void {
  this.teacherService.getAllteachers().subscribe(teacher => {
   this.teachers = teacher;
  //  this.studentID = `FS100${students.length + 1}`
    });
    this.subjectservice.getSubjects().subscribe(res=>{
      this.subjects = res.map((item)=> {
        return {
          name: item.subjectName,
          code : item.id
        }
      })
    })
    this.subjectservice.getSubjects().subscribe(res=>{
      this.subSubject = res.map((item)=> {
        return {
          name: item.subSubject,
          code : item.id
        }
      })
    })
  }

  addMore() {
    this.selectedInfo = this.selectedClass.value;
    this.infoList.push(this.selectedInfo);
    console.log(this.infoList) 
  }
  // deleteRow(index: number) {
  //   this.formArr.removeAt(index);
  // }




  // for random id
  createId(): string {
    let id = 'FST-';
    var chars = '0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
  

  addTeacher = new FormGroup({ 
    fullname: new FormControl(''),
    teacherId: new FormControl(`${this.teacherID}`),
    birthdate: new FormControl(''),
    gender: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    street: new FormControl(''),
    postcode: new FormControl(''),
    joiningdate: new FormControl(''),
    niNumber: new FormControl(''),
    hourlyRate: new FormControl(''),
    avgHour: new FormControl(''),
    emergency1: new FormControl(''),
    number1: new FormControl(''),
    email1: new FormControl(''),
    relation1: new FormControl(''),
    emergency2: new FormControl(''),
    number2: new FormControl(''),
    email2: new FormControl(''),
    relation2 : new FormControl('')
    
  });

  selectedClass = new FormGroup({
    scheduleTime: new FormControl(''),
    scheduleDay: new FormControl(''),
    subject: new FormControl(''),
    subSubject: new FormControl(''),
    yearGroup: new FormControl(''),
    teacherID: new FormControl(`${this.teacherID}`)
  }); 


  onSubmit(){
    this.teacherService.PostTeacherData(this.addTeacher.value, this.infoList)
    .subscribe(res => {
      this.router.navigate(['/teachers']);
      this.displayBasic2= false

    })
     
  }
}