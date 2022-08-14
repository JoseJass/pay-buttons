//import logo from './logo.svg';
import React from 'react';
import {Button} from '@material-ui/core'
//import Button from '@material-ui/core/Button'
//import './App.css';

function App() {
  return (
    <div>
      Seleccione una de las opciones para realizar el pago:
      
      <p></p>
      <Button color ="primary" variant ='outlined' href='https://buy.stripe.com/test_cN29Dc1E80gO9WwcMN'>Pago impuesto predial de 1 año</Button>
      <p></p>
      <Button color ="secondary" variant ='contained' href='https://buy.stripe.com/test_5kA7v41E8fbI2u4bII'>Pago impuesto predial de 2 años </Button>
      <p></p>
      <Button color ="secondary" variant ='outlined' href='https://buy.stripe.com/test_3cs5mWciMaVs9Ww002'>Pago impuesto predial de 3 años</Button>
      <p></p>
      <Button color ="primary" variant ='contained' href='https://buy.stripe.com/test_fZe02CdmQ3t0d8I147'>Pago impuesto predial de 4 años</Button>
      <p></p>
      <Button color ="secondary" variant ='outlined' href='https://buy.stripe.com/test_3cs5mWciMaVs9Ww002'>Pago impuesto predial de 5 años</Button>
      <p></p>
      <Button color ="default" variant ='contained' href='https://buy.stripe.com/test_3cseXw0A42oWd8IcMR'>Pago impuesto predial de 6 años c/factura</Button>

    </div>
  );
}

export default App;
