import { Component, Renderer2, ElementRef } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "../home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  nombre = `LONOAL`;
  title = 'si ombre';
  contador = 0;

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  incrementCounter() {
    this.contador++;
  }

  moveButton() {
    const button = this.el.nativeElement.querySelector('button');
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    this.renderer.setStyle(button, 'position', 'absolute');
    this.renderer.setStyle(button, 'left', x + 'px');
    this.renderer.setStyle(button, 'top', y + 'px');
  }
}




