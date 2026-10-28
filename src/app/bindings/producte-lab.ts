//model i datos de prova Porpertybindings 

export interface ProducteLab{

id:number; 
nom:string ; 
precio:number ; 
estoc:number ; 
categoria:string ; 
imatgeUrl:string ; 
carrito ?: boolean ; 


}


export const PORDUCTES_LAB: ProducteLab[] = [
  {
    id: 1,
    nom: 'Apple MacBook Air M4',
    precio: 1099,
    estoc: 8,
    categoria: 'informatica',
    imatgeUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
    carrito : false
  },
  {
    id: 2,
    nom: 'Logitech MX Master 3S',
    precio: 99,
    estoc: 15,
    categoria: 'perifericos',
    imatgeUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80'
  ,
    carrito : false},
  {
    id: 3,
    nom: 'Auriculares Sony inalámbricos',
    precio: 249,
    estoc: 12,
    categoria: 'audio',
    imatgeUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
  ,
    carrito : false},
  {
    id: 4,
    nom: 'Samsung SSD externo',
    precio: 89,
    estoc: 0,
    categoria: 'almacenamiento',
    imatgeUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80'
 ,
    carrito : false},
  {
    id: 5,
    nom: 'Monitor para ordenador',
    precio: 179,
    estoc: 7,
    categoria: 'informatica',
    imatgeUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
 ,
    carrito : false },
  {
    id: 6,
    nom: 'Teclado mecánico gaming',
    precio: 69,
    estoc: 18,
    categoria: 'perifericos',
    imatgeUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
  ,
    carrito : false},
  {
    id: 7,
    nom: 'iPad de Apple',
    precio: 449,
    estoc: 9,
    categoria: 'tablets',
    imatgeUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
 ,
    carrito : false },
  {
    id: 8,
    nom: 'Webcam para ordenador',
    precio: 59,
    estoc: 14,
    categoria: 'accesorios',
    imatgeUrl: 'https://images.unsplash.com/photo-1587826080692-f439cd0b70da?auto=format&fit=crop&w=800&q=80'
  ,
    carrito : false}
];
