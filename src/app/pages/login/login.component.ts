import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  public formularioEnviado= false;

  

  constructor(private fb: FormBuilder, private pagesServide:PagesService, private router:Router) { }

  public miLogin!: FormGroup; 
 
  ngOnInit(): void {

    this.miLogin = this.fb.group({
      //los valores como arrays, despues de la coma, van los validadores sincronos y luego asincronos
      
      email: ['m@m.com', [Validators.required, Validators.email] ],
      password: ['123456', [Validators.required] ],
      remember:[false]
    
  
    })
  }

  //Validadores por html

  campoNoValido(campo:string):boolean{

    return this.miLogin.get(campo)!.invalid && this.formularioEnviado ? true : false

    
  }


  login(){


    this.pagesServide.login(this.miLogin.value).subscribe(resp =>{

      //console.log( resp);
    }, (err)=>{
      Swal.fire('Error', err.error.msg, 'error');
    })

    this.router.navigate(['/private']);

    this.formularioEnviado= true;



  }

}
