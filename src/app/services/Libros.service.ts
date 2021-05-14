import { Injectable } from "@angular/core";
import { from } from "rxjs";
import { IUser, ILibro} from "../Interfaces";
import {AngularFireDatabase} from '@angular/fire/database';
import firebase from 'firebase';



@Injectable()

export class LibroService{  
    Productos: (ILibro| IUser)[]=[];
constructor(private _db: AngularFireDatabase){


}
GetLibros() : firebase.database.Reference{
  let ref =this._db.database.ref("libros")
  return ref;
}
GetUsers() : firebase.database.Reference{
  let ref =this._db.database.ref("users")
  return ref;
}
setUser(producto: IUser){
let ref=this._db.database.ref("users");
ref.push(producto);

}
setLibro(producto: ILibro){
let ref=this._db.database.ref("libros");
ref.push(producto);

}
}

