import { Component } from '@angular/core';
import { Producte } from '../../interfaces/producte';

@Component({
  selector: 'app-tarjetas',
  imports: [],
  templateUrl: './tarjetas.html',
  styleUrl: './tarjetas.css',
})
export class Tarjetas {

mostrardesc=false ; 

producteXif: Producte ={
id : 1,
nom : 'bachir',
estoc : 12,
preu:120,
categoria:'',
foto:'',
disponible:true,
descripcio:'ggggggggg'
};

toggleDesc():void {
this.mostrardesc=!this.mostrardesc;

}

}

/*
aFEHIR ETIQUETA OFERTA I GRATUIT 
SI EL PRECIO ES INFERIOR A 20 --->OFERTA 
=0   --> GRATIS
PRECIO>100 PREMUIM

IF FINS DE UN FOR PARA MARCAR PRODUCTO ESPECIAL SI LA CATEGORIA ES INFORMATICA 


*/
