import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.html',
  styleUrl: './componente-hijo.css',
})
export class ComponenteHijo {
@Input () producto :any; 
@Output() añadir  = new EventEmitter<any>() ; 


agregarAlCarrito(){
  this.añadir.emit(this.producto) ; 
   
}


}
