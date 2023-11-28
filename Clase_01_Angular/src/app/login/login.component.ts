import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../Register/register.component';
import { RecuperationComponent } from '../recuperation/recuperation.component';
import { Router } from '@angular/router';
import { RedirectionComponent } from '../redirection/redirection.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RegisterComponent, RecuperationComponent, FormsModule, RedirectionComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  nombreUsuario: string = '';
  contrasena: string = '';

  mensajeInicioSesion: string = '';

  constructor(
    public route: Router
  ){}

  navegarredirection(){
    this.route.navigateByUrl('redirection');
  }

  navegarRegistro(){
    this.route.navigateByUrl('register');
  }

  navegarRestauracion(){
    this.route.navigateByUrl('recuperation');
  }

  // Obtener la lista de usuarios del localStorage
  private obtenerListaUsuarios(): any[] {
    const listaUsuariosString = localStorage.getItem('listaUsuarios');
    return listaUsuariosString ? JSON.parse(listaUsuariosString) : [];
  }

  validarInicio() {
    // Obtiene la lista actual de usuarios
    const listaUsuarios = this.obtenerListaUsuarios();

    // Verifica si existe un usuario con el nombre y contraseña proporcionados
    const usuarioValido = listaUsuarios.some(usuario => usuario.nombre === this.nombreUsuario && usuario.contrasena === this.contrasena);

    const usuarioIncorrecto = listaUsuarios.some(usuario => usuario.nombre === this.nombreUsuario || usuario.contrasena === this.contrasena);

    if (usuarioValido) {
      this.mensajeInicioSesion = 'Vamonos jeje';
      setTimeout(() => {
        this.route.navigateByUrl('redirection');;
      }, 1000);

    } else if (usuarioIncorrecto) {
      this.mensajeInicioSesion = 'Nombre de usuario o contraseña incorrectos.';
      
    }else{
      this.mensajeInicioSesion = 'El usuario no esta registrado en el sistema, por favor registrese';

      setTimeout(() => {
        this.route.navigateByUrl('register');;
      }, 2000);

    }

    // Limpiar los valores después de validar
    this.limpiarValores();
  }

  private limpiarValores() {
    this.nombreUsuario = '';
    this.contrasena = '';
  }


}
