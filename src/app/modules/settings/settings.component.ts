import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  // breadcrumb
  items = [{icon:"pi pi-home",label:'settings'}];
  displayUserModal = false
  role =[]
  selectedRole:any


  settings = []

  constructor() { 
    this.role = [
      {name: 'Editor', code: 'NY'},
      {name: 'Moderator', code: 'RM'},
      {name: 'Developer', code: 'LDN'},
  ];
  }

  ngOnInit(): void {
  }

  showAddUser(){
     this.displayUserModal = true
  }

}
