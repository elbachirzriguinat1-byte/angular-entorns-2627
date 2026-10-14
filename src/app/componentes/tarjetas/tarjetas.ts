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
