import { Component,  signal } from '@angular/core';
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
//carret [] = ProducteLab[] ;

productes : ProducteLab[] = PORDUCTES_LAB
carret : ProducteLab[] = [] ; 
  

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
 cantidad = 0 ; 

 cantidadCarrito(producte:ProducteLab) :any {
  return producte.estoc-1 ; 
 }
 
afegir(productes:ProducteLab) :any {
   
  if(!this.carret.includes(productes)){
     if(this.teEstoc(productes) ) {
    this.carret.push(productes) ;  
    this.cantidadCarrito(productes) ; 
    this.total = this.total+productes.precio ;
    productes.estoc = productes.estoc-1 ; 
    
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
return this.total ; 

}
Cantidad(productes : ProducteLab) : any {
if(productes.estoc){
productes.estoc=productes.estoc-1 ; 
this.cantidad ++; 
    this.total = this.total+productes.precio ;

}else{
  alert("No quedan mas unidades de este producto en stock");
}

}


}
 

