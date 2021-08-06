import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

import { PaginaErrorComponent } from './pages/pagina-error/pagina-error.component';
import { EmpresasComponent } from './pages/empresas/empresas.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { MainPageComponent } from './shared/main-page/main-page.component';
import { SectoresComponent } from './pages/sectores/sectores.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { PrivateComponent } from './pages/private/private.component';


const routes: Routes = [

  {
    path:'',
    redirectTo:'/index',
    pathMatch:'full'
  },
  {
    path:'index', component:MainPageComponent
  },
  {
    path:'empresas', component:EmpresasComponent
  },
  {
    path:'sectores', component:SectoresComponent
  },
  {
    path:'contacto', component:FormularioComponent,
    
  },
  
  {
    path:'error', component:PaginaErrorComponent
  },
  {
    path:'login', component:LoginComponent,
  },
  {
    
    path:'private', component:PrivateComponent,
    canActivate:[AuthGuard],
    
    
  },

  {
    path:'**', redirectTo:'/index'
  },
  




];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
