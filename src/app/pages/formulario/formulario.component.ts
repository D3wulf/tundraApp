import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mensaje } from 'src/app/models/mensaje.model';
import Swal from 'sweetalert2';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  mensaje:Mensaje[]=[];

  constructor(private fb: FormBuilder, private pagesServide:PagesService) { }

  public miFormulario!: FormGroup; 
 
  ngOnInit(): void {

    this.miFormulario = this.fb.group({
      //los valores como arrays, despues de la coma, van los validadores sincronos y luego asincronos
      nombre: ['mik', [Validators.required, Validators.minLength(3),] ],
      email: ['m@m.com', [Validators.required, Validators.email] ],
      categoria:['', Validators.required],
      mensaje: ['123456', [Validators.required, Validators.minLength(6),Validators.maxLength(255)] ],
      
  
    })
  }

  enviar(){
    //Sacamos el nombre del formulario
    const {nombre}= this.miFormulario.value;

    console.log(nombre);

      if(this.miFormulario.valid){

        this.pagesServide.crearMensaje(this.miFormulario.value).subscribe(
          resp=> {
            if(resp){
              
              Swal.fire(`Gracias ${nombre}!`,`Tu mensaje ha sido enviado!`, 'success' );
              
            }
          }
        )

      }

      this.miFormulario.reset();

    

    


  }

}
