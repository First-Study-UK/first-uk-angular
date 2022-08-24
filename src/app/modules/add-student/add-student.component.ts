import { CoursesService } from 'src/app/shared/services/courses.service';
import { TeacherService } from 'src/app/shared/services/teacher.service';
import { Router } from '@angular/router';

import { StudentService } from 'src/app/shared/services/student.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';




@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
 

  maxDateValue = new Date();
  studentID = this.createId()
  students:any
  dates:any
  displayBasic2: boolean;
  tutors:any
  selectedTutors:any
  day:any
  selectedDay:any
  subjects:any
  subSubjects:any
  sctime:any;
  subject:any;
  subSubject:any;

  selectedIndividualTeacher:any
  finalSelectedSubjectId:any
  finalSelected:any

  displayPersonal= false;
  displayAcademic= false;
  displayOthers= false;

  class:any;
  yearGroup:any;
  tutor:any;
  selectedInfo: any;
  infoList = [];
  gender:any;
  subjectsData = []


  constructor(
    private StudentService: StudentService,
    private formbuilder: FormBuilder,
    private router :Router,
    private teacherService:TeacherService,
    private subjectservice : CoursesService
    ) {
    this.yearGroup = [
    {name: "Year 01",code:"01"},
    {name: "Year 02",code:"02"},
    {name: "Year 03",code:"03"},
    {name: "Year 04",code:"04"},
    {name: "Year 05",code:"05"},
    {name: "Year 06",code:"06"},
    ],
    this.gender = [
    {name: "male",code:"01"},
    {name: "female",code:"02"},
    {name: "other",code:"03"},
    ]

}


ngOnInit(): void {
  this.StudentService.getlAllStudent().subscribe(students => {
   this.students = students;
  //  this.studentID = `FS100${students.length + 1}`
    });
    this.teacherService.getAllteachers().subscribe(teacherData => {
      this.tutors = teacherData.map((item)=> {
        console.log(item)
        return {
          name: item.teacherInfo.fullName,
          code : item.teacherInfo.teacherId
        }
      })
      });
  }
  

  // for random id
  createId(): string {
    let id = 'FS-';
    var chars = '0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}
 

  addStudent = new FormGroup({ 
    fullname: new FormControl(''),
    studentId: new FormControl(`${this.studentID}`),
    birthdate: new FormControl(''),
    gender: new FormControl(''),
    mobile: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    street: new FormControl(''),
    postcode: new FormControl(''),
    enroldate: new FormControl(''),
    
    yeargroup: new FormControl(''),
    contact1: new FormControl(''),
    mbl1: new FormControl(''),
    emailp1: new FormControl(''),
    contact2: new FormControl(''),
    mbl2: new FormControl(''),
    emailp2: new FormControl(''),
    allergy: new FormControl(''),
    medical: new FormControl(''),
    learning: new FormControl('')
  });


  // "studentId": "string",
  // "subject": "string",
  // "subSubject": "string",
  // "tutorName": "string",
  // "scheduleDay": "string",
  // "scheduleTime": "string",
  // "teacherId": "string"

  selectedSubject = new FormGroup({
    studentId: new FormControl(`${this.studentID}`),
    selectedClassId: new FormControl(''),
  })

  addMore(){
    this.infoList.push(this.selectedSubject.value);
    console.log(this.selectedSubject.value);
    
    this.subjectsData.push({...this.finalSelected,tutorName:this.selectedIndividualTeacher.teacherInfo.fullName})
  }

  onSubmit(){
    console.log(this.infoList)
    this.StudentService.PostStudentData(this.addStudent.value, this.infoList)
    .subscribe(res => {
      this.router.navigate(['/students']);
      this.displayBasic2= false
      console.log(res);
    })
  }

  selectTeacher(e){
    this.teacherService.getIndividualTeacher(e).subscribe(teacherData => {
      this.selectedIndividualTeacher = teacherData
      
      this.sctime = teacherData.selectedClass.map((item)=> {
        return {
          name: item.scheduleTime,
          code : item.id
        }
      })  
    });
  }

  selectTeacherTime(e){
   let sday = this.selectedIndividualTeacher.selectedClass.find((time)=> time.scheduleTime == e)
   console.log(sday.id);
   this.finalSelectedSubjectId= sday.id
   this.finalSelected = sday
   this.day = sday.scheduleDay
   this.subject =sday.subject
   this.subSubject =sday.subSubject
  }
}