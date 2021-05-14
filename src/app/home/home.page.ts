import { Component } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { IUser } from '../Interfaces';
import { LibroService } from '../services/Libros.service';


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
  match: boolean = false

  constructor(private _Libroservice: LibroService) { }

  // ngOnInit() {
  //   let ref = this._Libroservice.GetUsers();
  //   ref.once("value", snapshot => {

  //     snapshot.forEach(child => {
  //       console.log("he encontrado " + child.val().user.userid);
  //       let user: IUser = {
  //         "userid": child.val().user.userid,
  //         "pwd": child.val().pwd
  //       }
  //       this.Users.push(user)
  //     })
  //   })

  //   this.Users.forEach(user => {
  //     if ((user.userid == this.useridInput) && (user.pwd == this.pwdInput)) {
  //       this.match = true


  //     } else {
  //       this.errorMessage = "Contraseña o ususario incorrectos"
  //     }



  //   });







  // }
}
