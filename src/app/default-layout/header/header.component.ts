import { StudentService } from './../../shared/services/student.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  value3: string;

  items: MenuItem[];
  itemss: MenuItem[];
  text: string;
  results: any;
  info:any
  searchStudent:any
  constructor(public authService: AuthService, private router : Router, private students:StudentService){}

  ngOnInit() {


    console.log(this.text);
    

      this.items = [
          {label: 'Settings', icon: 'pi pi-fw pi-plus'},
          {label: 'Accounts', icon: 'pi pi-fw pi-download'},
          {label: 'Logout', icon: 'pi pi-fw pi-refresh'}
      ];

      this.itemss = [
        {
            label: 'File',
            items: [{
                    label: 'New', 
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        {label: 'Project'},
                        {label: 'Other'},
                    ]
                },
                {label: 'Open'},
                {label: 'Quit'}
            ]
        },
        {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
            ]
        }
       ];



  }
  logout(){
    // localStorage.removeItem("token");
    this.authService.logout().subscribe(() =>{
      window.localStorage.clear(); 
      this.router.navigate([''])
 
    })
  }
  search(event) {
    this.students.getlAllStudent().subscribe(data => {
   
  let results = data.find((item)=> item.studentInfo.fullName.toLowerCase().includes(event.query))
 this.searchStudent = results.studentInfo.studentId
  this.results =[results.studentInfo.fullName]
    });

}


searchSelected(e){
  this.router.navigate(['/studentinfo/', this.searchStudent]);
}
}
