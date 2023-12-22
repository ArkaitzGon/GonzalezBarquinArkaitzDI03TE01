import { GestionArticulosService } from './../servicios/gestion-articulos.service';
import { Component } from '@angular/core';
import { Source } from '../interfaces/mis-interfaces';

export interface IElemento {
  status: string;
  totalResults: number;
  articles: Articulo[];
}

export interface Articulo {
  source: Source;
  author?: string;
  title: string;
  description?: string;
  url: string;
  urlToImage?: string;
  publishedAt: string;
  content?: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  
  constructor(public gestionArticulos: GestionArticulosService) {}

  /**
   * Metodo que añade un articulo al array de articulos para leer
   * cuando se hace click en el boton añadir
   * @param arti con el articulo a añadir
   */
  onClick(arti: Articulo){
    this.gestionArticulos.insertaArticulo(arti);
  }
}
