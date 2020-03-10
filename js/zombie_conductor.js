/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */

  this.direccion = direccion;

  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  //Enemigo.call(/* ... */);

  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */


}

/* Completar creacion del ZombieConductor */

ZombieConductor.prototype = Object.create(Enemigo.prototype);
ZombieConductor.prototype.constructor = ZombieConductor;



/* Completar metodos para el movimiento y el ataque */


ZombieConductor.prototype.moverse = function () {
  
//si la direccion es vertical aplicarle velocidad vertical y
if (this.direccion === 'v'){
  this.y -= this.velocidad;
}
//si la direccion es horizontal aplicarle velocidad horizontal eje x
else if (this.direccion === 'h'){
  this.x -= this.velocidad;
}

// En esta parte invertimos direccion horizontal si toca uno de sus limites
// se modifica la velcidad, multiplicando por -1 la velocidad 
//invertimos la direccion

if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
  this.velocidad *= -1;
}



if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
  this.velocidad *= -1;
}

}

ZombieConductor.prototype.atacar = function (jugador) {

jugador.perderVidas(jugador.vidas);
  

}