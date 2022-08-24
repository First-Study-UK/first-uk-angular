import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {


  status:any = true
  items:MenuItem[] = []


  
  constructor(public authService : AuthService, private router : Router) {}

  ngOnInit() {
  }
  logout(){
    // localStorage.removeItem("token");
    this.authService.logout().subscribe(() =>{
      window.localStorage.clear(); 
      this.router.navigate([''])
 
    })
  }

}
