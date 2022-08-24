import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { StudentService } from 'src/app/shared/services/student.service';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

// breadcrumb
items = 
[
  {icon: 'pi pi-home',label:'All Students'},
 ];
 courseAction = [{icon:"pi pi-pencil",label:'Edit'},{icon:"pi pi-times",label:'Delete'}];
 displayBasic2: boolean;
 students: any;
 virtualCourses: any[];
 cols: any[];
 checked: boolean;
 property:''
 dt:any
 loading:any = true


student:any



representatives:any;

statuses: any[];


activityValues= [0, 100];




ngOnInit(){
  this.StudentService.getlAllStudent().subscribe(students => {
   this.students = students;
   this.loading= false
   console.log(students);
   
    });
  }
  constructor(private StudentService: StudentService) { 
  }



  filterGlobal($event, stringVal){
    this.dt.filterGlobal(($event.target as HTMLInputElement).value, stringVal)
  }

  studentDelete(id){
    this.StudentService.DeleteStudent(id).subscribe((studentsdata)=>{

    })
   }


}
