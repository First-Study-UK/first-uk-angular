import { Component, OnInit,Input} from '@angular/core';
import { Table } from 'primeng/table';
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { PrimeNGConfig } from 'primeng/api';
import { StudentService } from 'src/app/shared/services/student.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  singlePayment: any;
  selectedCustomers:any;
  @Input() single:any; 
  loading:any = true

  constructor(private IndividualPaymentInfo: InvoiceService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {
    this.IndividualPaymentInfo.getIndividualInvoice(this.single)
    .subscribe(invoicedata => {
      this.singlePayment = invoicedata
      this.loading= false
     
     });

    
  }






}
