import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styles: [
  ]
})
export class MainPageComponent implements OnInit {

  

  constructor(private sharedService:SharedService) { }

  ngOnInit(): void {

    this.sharedService.cargaContenido();
  }

}
