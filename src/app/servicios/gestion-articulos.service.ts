import { Injectable } from '@angular/core';
import { Source } from '../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})

export class GestionArticulosService {

  private articulos: Articulo[] = [];
  private artSeleccionados: Articulo[] = [];

  constructor(private leerFichero: HttpClient) {
    this.getArticulosFichero();
   }

  /**
   * Metodo que devuelve el array articulos
   */
  getArticulos(){
    return this.articulos;
  }

  /**
   * Metodo que devuelve el array con los articulos que se quieren leer
   */
  getArticulosLeer(){
    return this.artSeleccionados;
  }

  /**
   * Metodo que carga el array con la informacion del fichero json
   */
  getArticulosFichero(){
    let articulosFichero: Observable<IElemento>;
  
    articulosFichero = this.leerFichero.get<IElemento>("/assets/datos/articulos.json");
  
    articulosFichero.subscribe((art: IElemento) => {
      this.articulos.push(...art.articles);
    });
  }
  
  /**
   * Inserta articulos para leerlos en un array
   * @param con el articulo a insertar
   */
  insertaArticulo(arti: Articulo){
    let existe: boolean = false;

    for(let i of this.artSeleccionados){
      if(i === arti){
        existe=true;
      }
    }
    if(!existe){
      this.artSeleccionados.push(arti);
    }
  }

  /**
   * Metodo que borra el articulo del array
   * @param con el articulo a borrar
   */
  borrarArticulo(arti: Articulo){
    let indice: number = this.artSeleccionados.indexOf(arti);
    this.artSeleccionados.splice(indice,1);
  }
}
