import React from 'react';

const Resultado = ({ total, plazo, cantidad }) => (
  <div className='u-full-with resultado'>
    <h2>Resumen</h2>
    <p>Cantidad solicitada: {(cantidad).toFixed(2)} €</p>
    <p>A pagar en {plazo} meses</p>
    <p>Pago mensual de {(total / plazo).toFixed(2)}€</p>
    <p>Total a pagar: {(total).toFixed(2)} €</p>
  </div>
);


export default Resultado;
