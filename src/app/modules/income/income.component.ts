import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { Component, OnInit } from '@angular/core';
import { IncomeService } from 'src/app/shared/services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  items = [{icon:"pi pi-home",label:'Income'}];
  allInvoice:any;
  totalIncome:any
  message: any

  constructor( private invoice: InvoiceService , 
              private income : IncomeService          
    ) { }

  
  ngOnInit(): void {
    this.income.setMessage(this.totalIncome)
    
    this.invoice.getInvoice().subscribe(data => 
      {
        return this.allInvoice = data,
        this.totalIncome = data.reduce((acc, cc) => acc + cc.totalPayable,0)
        
      }
      
       
      );
  }


}
