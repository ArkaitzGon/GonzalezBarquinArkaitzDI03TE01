import { GestionArticulosService } from '../../servicios/gestion-articulos.service';
import { Component } from '@angular/core';
import { Articulo, Source } from '../../interfaces/mis-interfaces';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  constructor(public gestionArticulos: GestionArticulosService) {}

  /**
   * Metodo que añade comprueba si se hace check en el articulo
   * Si se hace check añade el articulo a la lista para leer
   * Si se desahce el check, borra el articulo de la lista para leer
   * @param arti con el articulo a añadir o borrar
   */
  selecArticulo(evento: CustomEvent, arti: Articulo){
    let estado: boolean = evento.detail.checked;
    if(estado){
      this.gestionArticulos.insertaArticulo(arti);
    }else{
      this.gestionArticulos.borrarArticulo(arti);
    }
    
  }
}
