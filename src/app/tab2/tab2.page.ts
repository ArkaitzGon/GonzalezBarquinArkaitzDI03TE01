import { Component } from '@angular/core';
import { GestionArticulosService } from '../servicios/gestion-articulos.service';
import { Articulo } from '../interfaces/mis-interfaces';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public gestionArticulos: GestionArticulosService, private alerta: AlertController) {}



  /**
   * Metodo que crea la alerta y borra en caso de aceptar
   * @param arti Con el articulo a eliminar
   */
  async borrar(arti: Articulo) {
    const alert = await this.alerta.create({
      backdropDismiss: false,                
      header: 'Borrar',
      message: '¿Quieres borrar este articulo?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          
        }, {
          text: 'Ok',
          handler: (data) => {
            this.gestionArticulos.borrarArticulo(arti);
          }
        }
      ]
    });

    await alert.present();
  }

}
