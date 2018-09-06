import { Component, OnInit } from '@angular/core';
import { Tecla } from '../models/tecla';
import { Colores } from '../models/enum/colores';


@Component({
  selector: 'app-simon',
  templateUrl: './simon.component.html',
  styleUrls: ['./simon.component.css']
})
export class SimonComponent implements OnInit {

  niveles: number;
  teclas: any = [];

  constructor() {
    this.niveles = 5;
    this.teclas = this.generarTeclas(this.niveles);
    this.siguenteNivel(0);
  }

  ngOnInit() {
    console.log(this.niveles);
    console.log(this.teclas);

  }


  siguenteNivel(nivelActual) {
    if (nivelActual === this.niveles) {
      return alert('Ganaste');
    }

    alert(`Nivel ${nivelActual + 1}`);

    this.teclas.forEach(element => {
      console.log(`elemento:${element}`);
    });

  }

  click(color) {
    console.log(color);
    switch (color) {
      case 'verde':

        break;
      case 'amarillo':

        break;
      case 'azul':

        break;
      case 'rojo':

        break;

      default:
        break;
    }
  }

  generarTeclas(niveles) {
    return new Array(niveles).fill(0).map(this.generarTeclaAleatoria);
  }

  generarTeclaAleatoria() {
    const min = 1;
    const max = 4;
    return Math.round(Math.random() * (max - min) + min);
  }

  activate(keyCode, opts) {
    const el = this.getElementByKeyCode(keyCode);
    el.classList.add('active');
    if (opts.success) {
      el.classList.add('success');
    } else if (opts.fail) {
      el.classList.add('fail');
    }
    setTimeout(() => this.deactivate(el), 500);
  }

  deactivate(el) {
    el.className = 'key';
  }

  getElementByKeyCode(keyCode) {
    return document.querySelector(`[data-key="${keyCode}"]`);
  }


}
