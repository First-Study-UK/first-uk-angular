import { StudentService } from 'src/app/shared/services/student.service';
import { DashboardService } from './../../shared/services/dashboard.service';
import { HttpClient } from '@angular/common/http';
import { TimeService } from './../../shared/services/timetable.service';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { IncomeService } from 'src/app/shared/services/income.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  value: Date;
  items = [{icon:"pi pi-home",label:'Courses'},];
  courseAction = [{icon:"pi pi-pencil",label:'Edit'},{icon:"pi pi-times",label:'Delete'}];
  displayBasic2: boolean;
  courses: any[];
  virtualCourses: any[];
  cols: any[];
  checked: boolean;
  property:''
 data: any
 options:any
 allInvoice:any;
 dateData = Date()
 display = false
 date14:any = Date
 events:any
 totalIncome:any
 loading:any = true
 barloading:any = true
 noData:any


  constructor(
    private http: HttpClient, 
    private timetable: TimeService,
    private invoice : InvoiceService,
    private dashoardDues : DashboardService,
    private students :StudentService,
    private income : IncomeService
    ) {
  }

  ngOnInit() {
 
    this.dashoardDues.getDashboardDues().subscribe((data)=>{
    if(data.length > 0){
      this.allInvoice = data
      this.loading = false
    }
    else{
      this.loading = true
    }
    });
    this.timetable.getDashEvent().subscribe((e)=>this.events = e)
    this.students.getlAllStudent().subscribe((e)=> {
       
       let data = e.map((y)=> y.studentInfo.year)
       let year1 = []
       let year2 = []
       let year3 = []
       let year4 = []
       let year5= []
       let year6 = []
       let year7 = []
       let year8 = []
       let year9 = []
       let year10 = []
       let year11 = []
       let year12 = []
       let newd= data.filter((e)=> {
        if(e == 1){
           year1.push(e)
        }
        if(e == 2){
          year2.push(e)
       }
       if(e == 3){
        year3.push(e)
       }
        if(e == 4){
        year4.push(e)
        }
       if(e == 5){
        year5.push(e)
       }
        if(e == 6){
          year1.push(e)
      }
      if(e == 7){
        year2.push(e)
      }
      if(e == 8){
      year3.push(e)
      }
      if(e == 9){
      year4.push(e)
      }
      if(e == 10){
      year5.push(e)
     }
      if(e == 11){
      year5.push(e)
      }
     if(e == 12){
      year5.push(e)
     }
       })

      
      this.data = {
        labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6', 'Year 7', 'Year 8', 'Year 9','Year 10', 'Year 11',  'Year 12',],
        datasets: [
            {
                label: 'Male',
                data: [year1.length, year2.length, year3.length, year4.length, year4.length,
                       year5.length, year6.length,year7.length,year8.length,year9.length,
                        year10.length,year11.length,year12.length],
                backgroundColor: 'rgba(83, 85, 137, 1)',
            },
            {
                label: 'Female',
                data: [28, 48, 40, 19, 86, 27, 90,56, 55, 40,50,20,55],
                backgroundColor: '#ffa550',
            }
        ]
     }

     this.barloading = false
    })

    
    

   }



    addEvent = new FormGroup({
        title: new FormControl(''),
        date: new FormControl(''),
        details: new FormControl('')
    })

   onSubmit(){
    this.timetable.postDashEvent(this.addEvent.value)
    .subscribe(res => {
      this.display= false
      location.reload();
    })
   }
   showBasicDialog2() {
    this.displayBasic2 = true;
 }

    onFocus() {
        this.display = true
    }

    

  }












