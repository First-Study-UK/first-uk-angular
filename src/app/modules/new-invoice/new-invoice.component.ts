import { StudentService } from './../../shared/services/student.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { InvoiceService} from 'src/app/shared/services/invoice.service';
import { Router} from '@angular/router';
import jsPDF from 'jspdf';
@Component({
  selector: 'app-invoice-print',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css']
})

export class NewInvoiceComponent implements OnInit {

  @ViewChild ('content', {static:false}) el!: ElementRef;


  makePdf(){
    const doc = new jsPDF('p','pt','a4');
    doc.html(this.el.nativeElement,{
      callback:(pdf)=>{
        doc.save("Invoice.pdf");
      }
    })
  }
  




// breadcrumb
items = [{icon:"pi pi-home",label:'New Invoice'}];
calenderValue :''
currency:''
discount:''
returnUrl: "/dashboard"
displayBasic2 : any

paymentMethods:any;
selectedPaymentMethods:any ;

paymentStatus:any;
selectedPaymentStatus:any ;

autoResize: 300
recentPayment :[]

displayDownload : any

text: string;
results: any;
searchStudent:any
sname:any
id:any
enroll:any
end:any

constructor(private invoice: InvoiceService,private router: Router,private students:StudentService) {
  this.paymentMethods = [
    {name: 'Paypal',code: 'p1'},
    {name: 'Payoneer',code: 'p2'},
];
this.paymentStatus = [
  {name: 'Paid', code: 'p1'},
  {name: 'Cash', code: 'p2'},
];



 }


 showBasicDialog2(){
  this.displayBasic2 = true
 }

 showDownloadDialog(){
  this.displayDownload = true
 }
ngOnInit() {

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
  invoiceId: new FormControl(''),
  Note: new FormControl('')
})
onSubmit(){
  console.log(this.addInvoice.value);
  
  this.invoice.PostInvoice(this.addInvoice.value)
  .subscribe(res => {
    this.displayBasic2= false
    this.router.navigate(['/accounts']);
  })
}

discountPercent(e){
  console.log(e)
 }

 search(event) {
  this.students.getlAllStudent().subscribe(data => {
 
let results = data.find((item)=> item.studentInfo.fullName.toLowerCase().includes(event.query))
this.searchStudent = results.studentInfo.studentId
this.results =[
{
  label: results.studentInfo.fullName, 
  value: results.studentInfo.studentId
}
]
  });

}

searchSelected(e){
  this.students.getIndividualStudent(e.value).then(data => {
    console.log(data.studentInfo);
    
    this.sname=data.studentInfo.fullName,
    this.id=data.studentInfo.studentId,
    this.enroll=data.studentInfo.enrolmentDate,
    this.end=data.studentInfo.endDate

      })
      
}

}
