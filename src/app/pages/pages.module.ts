import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EmpresasComponent } from './empresas/empresas.component';
import { FormularioComponent } from './formulario/formulario.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { SectoresComponent } from './sectores/sectores.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { PrivateComponent } from './private/private.component';





@NgModule({
  declarations: [
    EmpresasComponent,
    FormularioComponent,
    LoginComponent,
    PaginaErrorComponent,
    PrivateComponent,
    
    SectoresComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    EmpresasComponent,
    FormularioComponent,
    LoginComponent,
    PrivateComponent,
    SectoresComponent,
    
  ]
})
export class PagesModule { }
