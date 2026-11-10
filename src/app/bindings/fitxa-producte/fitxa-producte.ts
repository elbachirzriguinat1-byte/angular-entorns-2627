import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { PORDUCTES_LAB, ProducteLab } from '../producte-lab';

@Component({
  selector: 'app-fitxa-producte',
  imports: [],
  templateUrl: './fitxa-producte.html',
  styleUrl: './fitxa-producte.css',
})
export class FitxaProducte {

// fitxa Producte  =>  es fill , nomes printrara Un producte tendra datos de el component padre pero solo muestra los datos del producte elejido 

// decalrar Input y output  herencia de componnetes 

@Input() producte !: ProducteLab ; 
@Input() enCarret = false; 
@Output() afegir = new EventEmitter<ProducteLab>() ; 
@Output() Treure = new EventEmitter<ProducteLab>() ; 


get teEstoc(): boolean { 
  return this.producte.estoc >0 ; 
}
 classesFitxa (): string{
    const classes = ['fitxa'];
    if (this.producte.precio > 500) classes.push('destacat');
    if (this.producte.precio < 50) classes.push('oferta');
    if (this.producte.estoc === 0) classes.push ('esgotat');
    return classes.join(' ');
  }
 imatgeSegura () : string {
    return this.producte.imatgeUrl || 'https://placehols.co/300x180?text=Sense+imatge';
  }

  urlFitxa () : string{
    return `https://botiga.cat/producte/${this.producte.id}`;
  }
  
  alCarret (p: ProducteLab) : boolean {
    return this.carret.includes(p.id);
  }

  treure(p: ProducteLab) : void{
    this.carret = this.carret.filter(id => id !== p.id)
  }
  
  cliclAfegir() : void {
    this.afegir.emit(this.producte) ; 

  }

  trueree () : void { 
    this.Treure.emit(this.producte) ; 

  }

}
