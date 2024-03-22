import { Injectable } from '@angular/core';
import { Articulo, Respuesta, Source } from '../interfaces/mis-interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    let articulosFichero: Observable<Respuesta>;
  
    articulosFichero = this.leerFichero.get<Respuesta>("/assets/datos/articulos.json");
  
    articulosFichero.subscribe(art =>{
      this.articulos.push(... art.articles);
    });
  }
  
  /**
   * Inserta articulos para leerlos en un array
   * @param con el articulo a insertar
   */
  insertaArticulo(arti: Articulo){
    let existe: boolean = false;

    // Buscamos el articulo en la lista para leer
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
