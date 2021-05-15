import { Component } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { IUser } from '../Interfaces';
import { LibroService } from '../services/Libros.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  useridInput: string;
  pwdInput: string;
  Users: (IUser)[] = [];
  errorMessage: string;
  match=false

  constructor(private _toastCtrl: ToastController ,private _Libroservice: LibroService) { }

  ngOnInit() {
    console.log(this)
    let ref = this._Libroservice.GetUsers();
    ref.once("value", snapshot => {

      snapshot.forEach(child => {
        console.log("he encontrado " + child.val().userid);
        let user: IUser = {
          "userid": child.val().userid,
          "pwd": child.val().pwd,
          "nombre": child.val().nombre,
          "tlf": child.val().tlf,
          "preferencias": child.val().preferncias,
          "key": child.key
        }
        this.Users.push(user)
      })
    })

  }
  async presentToast() {
    const toast = await this._toastCtrl.create({
        message: 'Contrasenya o Usuario incorrecto',
        duration: 3000,
        position: 'bottom'

    });
    toast.present();

}
 async CorrectToast() {
    const toast = await this._toastCtrl.create({
        message: 'Login Correcto',
        duration: 3000,
        position: 'bottom'

    });
    toast.present();

}
   matchLogin() {
    
    this.Users.forEach(user => {
      if ((user.userid == this.useridInput) && (user.pwd == this.pwdInput)) {
        this.match = true
        console.log("match")
        this.CorrectToast();

  
  
      } else {
        this.errorMessage = "Contraseña o ususario incorrectos"
        this.presentToast();
        this.match=false

      }
  
  
  
    });
    
  }
  
}

