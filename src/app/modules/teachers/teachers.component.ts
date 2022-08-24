import { ActivatedRoute } from '@angular/router';
import { TeacherService } from './../../shared/services/teacher.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  items = 
  [
  
    {label:'Teachers',icon:"pi pi-home"},
   ];
  allTeacherData:any
  singleTeacherID:any
// breadcrumb
 displayAddTeacher: boolean = false;
 displayEdit: boolean = false;



 constructor(private TeacherService:TeacherService, private route: ActivatedRoute) {}


    ngOnInit() {
    this.TeacherService.getAllteachers().subscribe((teacherData)=>{
       this.allTeacherData = teacherData 
       console.log(teacherData);
    })
    }



    


  showAddTeacher() {
      this.displayAddTeacher = true;
  }
  showEdit() {
      this.displayAddTeacher = true;
  }



  }

