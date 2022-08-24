import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/shared/services/timetable.service';
import { PrimeNGConfig } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar-right',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
})
export class SidebarRightComponent implements OnInit {
  display = false
  date14:any = Date
  events:any
  loading:any = true

  constructor( 
    private http: HttpClient,private timetable: TimeService,
    private primengConfig: PrimeNGConfig ) { }

  ngOnInit() {
    this.loading = true
    this.primengConfig.ripple = true;
    this.timetable.getDashEvent().subscribe((e)=>{
      if(e.length>0){
        this.loading = false
        this.events = e

      }
      else{
        this.loading = true
      }
     
     })
     
    }
}



