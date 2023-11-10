import React from 'react';
import '../Hojas de estilo/Boton.css';

function Boton2({ texto2, esBotonDeClic2, manejarClic2,subir2 }){
  return(
    
       <button
      className={ esBotonDeClic2 ? 'boton-clic': 'boton-reiniciar' }
      onClick={ manejarClic2 } >
      {texto2}
        </button>
      

  );
}

function Menos2({ text2, menos2 }){
  return(
    
       <button
      className='Menos'
      onClick={ menos2 } >
      {text2}
    </button>


  );
}
export {Boton2,Menos2};