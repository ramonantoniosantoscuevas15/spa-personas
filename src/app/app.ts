import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioPersonas } from "./personas/formulario-personas/formulario-personas";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormularioPersonas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('spa-personas');
}
