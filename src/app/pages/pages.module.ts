import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EmpresasComponent } from './empresas/empresas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { SectoresComponent } from './sectores/sectores.component';





@NgModule({
  declarations: [
    EmpresasComponent,
    PaginaErrorComponent,
    SectoresComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  exports:[
    EmpresasComponent,
    FormularioComponent,
    SectoresComponent,
  ]
})
export class PagesModule { }
