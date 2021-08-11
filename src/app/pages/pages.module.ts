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
import { EquipoComponent } from './equipo/equipo.component';
import { TrabajaconnosotrosComponent } from './trabajaconnosotros/trabajaconnosotros.component';
import { ChartsModule } from 'ng2-charts';
import { VerempresasComponent } from './verempresas/verempresas.component';





@NgModule({
  declarations: [
    EmpresasComponent,
    EquipoComponent,
    FormularioComponent,
    LoginComponent,
    PaginaErrorComponent,
    PrivateComponent,    
    SectoresComponent,
    TrabajaconnosotrosComponent,
    VerempresasComponent,
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChartsModule,
  ],
  exports:[
    EmpresasComponent,
    EquipoComponent,
    FormularioComponent,
    LoginComponent,
    PaginaErrorComponent,
    PrivateComponent,    
    SectoresComponent,
    TrabajaconnosotrosComponent,
    VerempresasComponent
    
  ]
})
export class PagesModule { }
