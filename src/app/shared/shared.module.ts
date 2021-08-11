import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BusquedaComponent } from './busqueda/busqueda.component';









@NgModule({
  declarations: [
    
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    SidebarComponent,
    BusquedaComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    MainPageComponent,
    SidebarComponent,
    BusquedaComponent
  ]
})
export class SharedModule { }
