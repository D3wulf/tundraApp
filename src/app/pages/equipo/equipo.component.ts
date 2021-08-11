import { Component, OnInit } from '@angular/core';

export interface Equipo{

  nombre:string,
  puesto:string,
  imagen:string,
  rrss:string
}

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styles: [
  ]
})
export class EquipoComponent implements OnInit {

  miEquipo:Equipo[]= [
    {
      nombre:"Mario Sánchez",
      puesto:"CEO",
      imagen:"https://firebasestorage.googleapis.com/v0/b/tundraapp-fe765.appspot.com/o/equipo1.jpg?alt=media&token=ed99f569-fdba-427f-9af2-d878e25b5d1b",
      rrss:"marioceotundra"
    },
    {
      nombre:"Angie Villalba",
      puesto:"Diseñadora gráfica",
      imagen:"https://firebasestorage.googleapis.com/v0/b/tundraapp-fe765.appspot.com/o/equipo2.jpg?alt=media&token=9a425ac6-8485-4c43-946b-18974215266a",
      rrss:"angiediseñatundra"
    },
    {
      nombre:"Miguel Miranda",
      puesto:"Desarrollador",
      imagen:"https://firebasestorage.googleapis.com/v0/b/tundraapp-fe765.appspot.com/o/equipo3%20(2).jpg?alt=media&token=bdfcac4e-64a7-47dd-9730-c4d3ccda1fc4",
      rrss:"calahondamike"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
