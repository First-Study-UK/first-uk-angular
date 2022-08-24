
import { InvoiceService } from 'src/app/shared/services/invoice.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { StudentService } from 'src/app/shared/services/student.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import * as FileSaver from 'file-saver';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-invoice-print',
  templateUrl: './invoice-print.component.html',
  styleUrls: ['./invoice-print.component.css']
})
export class InvoicePrintComponent implements OnInit {
  // breadcrumb
  items = [{icon:"pi pi-home",label:'Download'}];
  displayBasic2 : any
  singleStudentPayment:any
  allStudentsData:any


  @ViewChild ('content', {static:false}) el!: ElementRef;
  constructor(private route: ActivatedRoute, private StudentService: StudentService,private invoice: InvoiceService ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:any) => {
      this.invoice.getIndividualPaymentInvoice(params.id).subscribe((sudentdata)=>{
        this.singleStudentPayment = sudentdata  
      })
  });

  this.StudentService.getlAllStudent().subscribe((studentsdata)=>{
     this.allStudentsData = studentsdata 
  })
  }

  showBasicDialog2(){
    this.displayBasic2 = true
   }
   makePdf(){
    const doc = new jsPDF('p','pt','a4');
   
    doc.html(this.el.nativeElement,{
      callback:(pdf)=>{
        doc.save("Invoice.pdf");
      }
    })
 
  }

  // exportPdf() {
  //   import("jspdf").then(jsPDF => {
  //       import("jspdf-autotable").then(x => {
  //           const doc = new jsPDF.default(0,0);
  //           doc.autoTable(this.exportColumns, this.products);
  //           doc.save('products.pdf');
  //       })
  //   })




}
