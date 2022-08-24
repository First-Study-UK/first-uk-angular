import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import {AutoCompleteModule} from 'primeng/autocomplete';
@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    AvatarModule,
    AvatarGroupModule,
    BrowserAnimationsModule,
    MenuModule,
    ButtonModule,
    MenubarModule,
    AutoCompleteModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class HeaderModule { }
