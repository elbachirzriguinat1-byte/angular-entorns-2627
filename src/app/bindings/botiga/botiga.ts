import { Component,  signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PORDUCTES_LAB, ProducteLab } from '../producte-lab';
import { FitxaProducte } from '../fitxa-producte/fitxa-producte';

@Component({
  selector: 'app-botiga',
  imports: [FitxaProducte],
  templateUrl: './botiga.html',
  styleUrl: './botiga.css',
})

export class Botiga {

title = 'Botiga de bindings' ; 
//carret [] = ProducteLab[] ;

productes : ProducteLab[] = PORDUCTES_LAB
carret : ProducteLab[] = [] ; 
    cerca = '';

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
 total =0 ; 
 mostrar_total= false ; 
 cantidad = 0 ; 

 cantidadCarrito(producte:ProducteLab) :any {
  return producte.estoc-1 ; 
 }
 
afegirr(productes:ProducteLab) :any {
   
  if(!this.carret.includes(productes)){
     if(this.teEstoc(productes) ) {
    this.carret.push(productes) ;  
    this.cantidadCarrito(productes) ; 
    this.total = this.total+productes.precio ;
    productes.estoc = productes.estoc-1 ; 
    productes.cantidad_carr=1 ;
    
  }else { 
        alert("Producto : "+productes.nom+" No tiene stock ") ;

  }
    
    productes.carrito =! productes.carrito ; 
    
  }else{
    alert("Has añadido este producto al carrito ") ;
    return ; 
  }
}
Total_precio():any {
    this.mostrar_total =!this.mostrar_total ; 

if(!this.mostrar_total){
  return this.total ; 
}

}

Cantidad(productes : ProducteLab) : any {
if(productes.estoc){
productes.estoc=productes.estoc-1 ; 
productes.cantidad_carr ++; 
    this.total = this.total+productes.precio ;
     
}else{
  alert("No quedan mas unidades de este producto en stock");
}

}
Quitar_del_Carrito(productes:ProducteLab) {
  if(productes.estoc){
productes.estoc=productes.estoc+1 ; 
productes.cantidad_carr --; 
    this.total = this.total-productes.precio ;
     
}else{
  alert("No quedan mas unidades de este producto en stock");
}
}
  classesFitxa (p: ProducteLab): string{
    const classes = ['fitxa'];
    if (p.precio > 500) classes.push('destacat');
    if (p.precio < 50) classes.push('oferta');
    if (p.estoc === 0) classes.push ('esgotat');
    return classes.join(' ');
  }

  imatgeSegura (p: ProducteLab) : string {
    return p.imatgeUrl || 'https://placehold.co/300x180?text=Sense+imatge';
  }

  urlFitxa (p: ProducteLab) : string{
    return `https://botiga.cat/producte/${p.id}`;
  }

  afegir(p: ProducteLab) : void {
    if (this.teEstoc(p) && !this.alCarret(p)){
      this.carret.push(p.id);
    }
  }

  alCarret (p: ProducteLab) : boolean {
    return this.carret.includes(p.id);
  }

  treure(p: ProducteLab) : void{
    this.carret = this.carret.filter(id => id !== p.id)
  }

  get totalCarret(): number{
    return this.productes
    .filter(p=> this.alCarret(p)) //es queda amb els productes que hi ha al carret
    .reduce((total, p) => total + p.preu, 0); //reduce suma els seus preus començant per 0
  }

  onCerca (event: Event) : void{
    this.cerca = (event.target as HTMLInputElement).value;
  }

  get productesVisibles() : ProducteLab[] {
    const text = this.cerca.trim().toLowerCase()
    return this.productes.filter(p => p.nom.toLowerCase().includes(text));
  }
//  Input and oUtput 
//  Doble clic sobre una fitxa per marcar-la o desmarcar-la com a favorita.
//  La llista de favorits és el pare. 
//  Examen Test + desarrollo 

}
 

