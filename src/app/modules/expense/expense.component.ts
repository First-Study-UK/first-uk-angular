import { ExpenseService } from './../../shared/services/expense.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  items = [{icon:"pi pi-home",label:'Expense'}];
  allExpense:any;
  display= false
  gender:any
  totalExpense:any


  constructor(private expense : ExpenseService) { 
    this.gender = [
      {name: "male",code:"01"},
      {name: "female",code:"02"},
      {name: "other",code:"03"},
    ]
  }

 ngOnInit(){
  this.expense.getExpense().subscribe(data => 
   {
    return this.allExpense = data, 
    this.totalExpense = data.reduce((acc, cc) => acc + cc.amount,0)
   })
  }
  showAddExpense(){
    this.display = true
  }
}
