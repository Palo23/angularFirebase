import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  item: any = {
    nombre: ''
  };

  constructor(private servicio: ConexionService) {

   }

  ngOnInit() {
  }

  agregar() {
    this.servicio.agregarItem(this.item);
    this.item.nombre = '';
  }

}
