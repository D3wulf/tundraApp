import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';



import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BusquedaComponent } from './shared/busqueda/busqueda.component';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    PagesModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
    
  ],
  exports:[BusquedaComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
