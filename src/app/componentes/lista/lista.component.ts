import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: any;
  itemEdit: any = {
    nombre: ''
  };

  constructor(private conexion: ConexionService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
    });
   }

  ngOnInit() {
  }

  eliminar(item) {
    this.conexion.eliminarItem(item);
  }

  editar(item) {
    this.itemEdit = item;
  }

  agregarEditado() {
    this.conexion.editarItem(this.itemEdit);
  }

}
