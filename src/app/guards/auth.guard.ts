import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PagesService } from '../pages/pages.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {

  constructor(private pagesService:PagesService, private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    if (this.pagesService.loginGuard.email){
      
      return true;
      
    }else{
      return false;
    }

    //otra forma
    //   if (route.routeConfig!.path === "private" ) {
    //     return true;
    // } else {
    //     return false;
    // }

    //console.log(route);
    //console.log(state);
  }

  // cargar modulos HIJOS OJO, SOLO PARA CHILDREN!
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log('hola desde el guard');
    return true;
  }
}
