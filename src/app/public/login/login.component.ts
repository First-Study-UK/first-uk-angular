
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators , FormControl} from '@angular/forms';
import { first } from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import { CommonService } from 'src/app/shared/services/common.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });
  

  // validateForm!: FormGroup;
  // resetForm!: FormGroup;
  // isLoading = false;
  // returnUrl: "/dashboard";
  // subUnitName: string;
  // visibleModal = false;
  // unitList     : any = [];
  // subUnitList  = [];
  // subunit      = [];
  // submitForm(): void {
  //   for (const i in this.validateForm.controls) {
  //     this.validateForm.controls[i].markAsDirty();
  //     this.validateForm.controls[i].updateValueAndValidity();
  //   }    
  //   if (this.validateForm.valid) {
  //   this.isLoading = true;
  //   this.SelectSubUnitChange(this.validateForm.value.subUnitId)
    
  //   this.service.login(this.validateForm.value.email, this.validateForm.value.password , this.validateForm.value.subUnitId , this.subUnitName)
  //     .pipe(first())
  //     .subscribe(result => {
  //       this.isLoading = false;
  //       this.messageService.add({severity:'success', summary:'Login Succesful'});
  //       localStorage.setItem('remember', this.validateForm.value.remember);
  //       this.router.navigate([this.returnUrl]);
  //     },
  //     error => {
  //       this.isLoading = false;
  //       let mgs = error.error.message ? error.error.message : error.message;
  //       this.messageService.add(mgs);
  //     });
  //   }


  // }

  constructor(
    private fb: FormBuilder,
    private commonService : CommonService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    // private messageService: MessageService,
    private toast: HotToastService,

    
    ) {}
   

  // ngOnInit(): void {
  //   this.validateForm = this.fb.group({
  //     email: [null, [Validators.required]],
  //     password: [null, [Validators.required]],
  //     remember: [false,[]]
  //   });

   
   

  //   // reset loin status
  //   this.resetForm = this.fb.group({
  //     email: [null, [Validators.required]]
  //   });
  //   this.service.logout();
  //   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  // }



  // closeModal() {
  //   this.visibleModal = false;
  // }
  // resetPassword() {
  //   this.service.resetPassword(this.resetForm.value.email).subscribe(res => {
  //     if (res.data) {
  //       this.messageService.add(res.l);
  //       this.visibleModal = false;
  //     } else {this.messageService.add(res.message); }
  //   });
  // }

  // SelectSubUnitChange(e){
  //   console.log(e);
  //    this.subUnitName = this.subunit.find(o=> o.subUnitId == e)?.subUnitName;
  // }
  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }

    const{email,password} = this.loginForm.value;
    this.authService.login(email,password).pipe(
      this.toast.observe({
        success: "Logged in successfully",
        loading: "Logging in...",
        error: "There was an error"
      })
    ).subscribe((arg) =>{
      this.router.navigate(['dashboard'])
      localStorage.setItem('token',JSON.stringify(arg));
    })

  }
  
}
