import { StudentService } from 'src/app/shared/services/student.service';
import { Component, OnInit } from '@angular/core';
import { CoursesService } from 'src/app/shared/services/courses.service';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-courses',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {


  // breadcrumb
     items = [{icon:"pi pi-home",label:'subjects'},];
     courseAction = [{icon:"pi pi-pencil",label:'Edit'},{icon:"pi pi-times",label:'Delete'}];
     displayBasic2: boolean;
     subjects = [];
     virtualCourses: any[];
     cols: any[];
     checked: boolean;
     property:''
     loading:any
    
  showBasicDialog2() {
      this.displayBasic2 = true;
  }

     constructor(private CoursesService: CoursesService) {}

     ngOnInit(): void{

         this.CoursesService.getSubjects()
         .subscribe(res=>{
          this.subjects = res
          // this.loading= false
         })
     }


   

     addCourses = new FormGroup({
      year: new FormControl(''),
      subject: new FormControl(''),
      subSubject: new FormControl('')
     })
  
     onClick(){
        this.CoursesService.PostSubjects(this.addCourses.value)
          .subscribe(res => {
            console.log(res);
            this.displayBasic2= false
          })
     }




 
}
