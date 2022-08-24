import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { Component, OnInit,} from '@angular/core';
import { recentPayments } from 'src/app/shared/services/recentPayments';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  // breadcrumb
  items = [{icon:"pi pi-home",label:'Invoice'}];
  calenderValue :''

  displayBasic2 : any

  paymentMethods:any;
  selectedPaymentMethods:any ;

  paymentStatus:any;
  selectedPaymentStatus:any ;

  autoResize: 300
  recentPayment :[]

  displayDownload : any

  singleStudentInfo:any
  allStudentsData:any

  invoiceId:any

 fees:any
 payable:any
 discount:any

 student:any
 stname:any
 enrol:any
  constructor(
    private recentPayments: recentPayments,
    private route: ActivatedRoute,
    private StudentService: StudentService,
    private invoice: InvoiceService,
    private router: Router
    ) {
    this.paymentMethods = [
      {name: 'Paypal', code: 'p1'},
      {name: 'Bank', code: 'p2'},
  ];
  this.paymentStatus = [
    {name: 'Paid', code: 'p1'},
    {name: 'Cash', code: 'p2'},
];

this.recentPayments.getRecentPayments().then(payments => {
  this.recentPayment = payments;
});
   }


  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.invoice.getIndividualPaymentInvoice(params.id).subscribe((sudentdata)=>{
        this.singleStudentInfo = sudentdata  
        this.student =sudentdata.studentId
        this.stname =sudentdata.fullName
        this.enrol =sudentdata.enrolmentDate
      })
      this.invoiceId = this.createId()
  });

  this.StudentService.getlAllStudent().subscribe((studentsdata)=>{
     this.allStudentsData = studentsdata 
  })
  
  }

  // for random id
  createId(): string {
    let id = 'FSI-';
    var chars = '01234FS56789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}


addInvoice = new FormGroup({
  studentId: new FormControl(''),
  studentName: new FormControl(''),
  enrolmentDate: new FormControl(''),
  endDate: new FormControl(''),
  fees: new FormControl(''),
  totalPayable: new FormControl(''),
  discount: new FormControl(''),
  paymentMethod: new FormControl(''),
  status: new FormControl(''),
  invoiceId: new FormControl(`${this.createId()}`),
  Note: new FormControl('')
})


onSubmit(){  console.log(this.addInvoice.value)


  this.invoice.PostInvoice(this.addInvoice.value)
  
  .subscribe(res => {
    this.displayBasic2= false
    this.router.navigate(['/invoiceprint', this.singleStudentInfo.studentId]);
    console.log(res);
    
  })
}

  showBasicDialog2(){
    this.displayBasic2 = true
   }

   showDownloadDialog(){
    this.displayDownload = true
   }


   discountPercent(e){
    console.log(e);
    
   }

}
