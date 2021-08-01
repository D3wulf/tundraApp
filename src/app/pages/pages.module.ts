import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { EmpresasComponent } from './empresas/empresas.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { SectoresComponent } from './sectores/sectores.component';



@NgModule({
  declarations: [
    EmpresasComponent,
    PaginaErrorComponent,
    SectoresComponent
  ],
  imports: [
    CommonModule,HttpClientModule
  ],
  exports:[
    EmpresasComponent,
    SectoresComponent
  ]
})
export class PagesModule { }
