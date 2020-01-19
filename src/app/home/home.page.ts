import { Component } from '@angular/core';
import { IBocadillo, IChivito } from '../interfaces';
import { ToastController } from '@ionic/angular';
import {BocadilloService } from '../services/bocadillo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  titulo : string = "Bocadillo Chivito";
  oculto : boolean = false;
  ruta : string = "../../assets/chivito.jpg";
  width : number = 200;
  texto : string = "Ocultar";
  nombre: string;
  precio: number;
  descripcion : string;

  bocadillos: (IBocadillo| IChivito)[] = [];


  constructor(private _toastCtrl : ToastController, private _bocadilloService : BocadilloService) {

  }

  ngOnInit(){
    let ref = this._bocadilloService.getBocadillos();

    ref.on("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.bocadillos.push(value);
        console.log("he encontrado "+child.val().nombre);
      })
    })

  }

  cambiar_Oculto() : void{
    this.oculto = !this.oculto;
    if(this.oculto==true){
      this.texto="Mostrar";
    }
    else{
      this.texto="Ocultar";
    }
  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: 'El bocadillo se ha insertado correctamente',
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  insertar(){
    let bocadillo: IBocadillo={"id": this.bocadillos.length+1,
                          "nombre": this.nombre,
                          "precio": this.precio,
                          "descripcion" : this.descripcion
              };

    this._bocadilloService.setBocadillo(bocadillo);

              //console.log("Se ha insertado un nuevo elemento");
    this.presentToast();
  }

}
