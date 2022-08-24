import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {


  status:any = true
  items:MenuItem[] = []
  info:any
  constructor(public authService : AuthService, private router : Router) {}

  ngOnInit() {
    let arrow = document.querySelectorAll(".arrow");
    let show = document.querySelectorAll(".add");
    

    show.forEach((item)=>{
      item.addEventListener("click", (e)=>{
       // let arrow = document.querySelectorAll(".arrow");
     //  (e.target as HTMLInputElement).childNodes.classList.toggle("showMenu");
     item.classList.toggle("showMenu");
      });
     })

    arrow.forEach((item)=>{
     item.addEventListener("click", (e)=>{
      // let arrow = document.querySelectorAll(".arrow");
    //  (e.target as HTMLInputElement).childNodes.classList.toggle("showMenu");
     });
    })
    
 let sidebar = document.querySelector(".sidebar");
 let sidebarBtn = document.querySelector(".bx-menu");
 console.log(sidebarBtn);
 sidebarBtn.addEventListener("click", ()=>{
   sidebar.classList.toggle("close");
 });

  }

  logout(){
    // localStorage.removeItem("token");
    this.authService.logout().subscribe(() =>{
      window.localStorage.clear(); 
      this.router.navigate(['login'])
 
    })
  }


}
