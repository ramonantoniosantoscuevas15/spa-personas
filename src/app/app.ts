import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioPersonas } from './formulario-personas/formulario-personas';
import { Menu } from "./componentes/menu/menu";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Menu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spa-personas');
}
