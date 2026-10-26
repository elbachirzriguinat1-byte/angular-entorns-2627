import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PORDUCTES_LAB, ProducteLab } from '../producte-lab';

@Component({
  selector: 'app-botiga',
  imports: [],
  templateUrl: './botiga.html',
  styleUrl: './botiga.css',
})
export class Botiga {

title = 'Botiga de bindings' ; 

productes : ProducteLab[] = PORDUCTES_LAB


 teEstoc(producte:ProducteLab):boolean {
  return producte.estoc>0
}
 producteDestacat(producte:ProducteLab):boolean {
  return producte.precio>100
}
productesgotat(producte:ProducteLab):boolean {
  return producte.precio <= 0 
}
 /*classesFitxa(producte:ProducteLab):string{
  const classes = ['fitxa']; 

  
 }*/
 
}
