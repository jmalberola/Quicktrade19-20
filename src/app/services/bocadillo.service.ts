import {Injectable} from '@angular/core';
import { IBocadillo } from '../interfaces';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()

export class BocadilloService{

  /*bocadillos: IBocadillo[] = [
    {
      "id" : 1,
      "nombre" : "chivito",
      "descripcion" : "El bocadillo chivito es un bocadillo que lleva distintos ingredientes como tomate, lechuga o lomo.",
      "precio" : 5.2
    },
    {
      "id" : 2,
      "nombre" : "brascada",
      "descripcion" : "El bocadillo brascada es un bocadillo que lleva ternera, cebolla, jamón y tomate.",
      "precio" : 5.4
    }
  ]*/

  constructor(private _db: AngularFireDatabase){

  }

  getBocadillos(): firebase.database.Reference{
    let ref=this._db.database.ref("bocadillos");
    return ref;
  }

  /*getBocadillo(id : number) : IBocadillo{
    return this.bocadillos.find(x => x.id == id);
  }*/

  setBocadillo(bocadillo: IBocadillo){
    let ref=this._db.database.ref("bocadillos");
    let res = ref.push(bocadillo);
    console.log("he insertado "+res.key);
  }


}
