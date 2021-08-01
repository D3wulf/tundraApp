import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';







@NgModule({
  declarations: [
    
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    SidebarComponent,
    
  ],
  imports: [
    CommonModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    SidebarComponent,
  ]
})
export class SharedModule { }
