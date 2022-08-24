import { AuthService } from 'src/app/shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})



export class AppComponent {
  title = 'First Study';
  data = false
  spin = false
  load = ()=>{
    this.spin = true
    setTimeout(()=>{
      this.spin = false
    },3000)
  }

  constructor(public authService : AuthService){ }
  ngOnInit(){
    
    this.authService.currentUser$.subscribe((data)=>{
      if(data){
        this.data = true
      }
      else{
      this.load
      }



    })
    }



}
