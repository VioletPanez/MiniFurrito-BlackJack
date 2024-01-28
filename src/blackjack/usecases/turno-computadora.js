import { pedirCarta, valorCarta, crearCartaHTML } from './'

/**
 * turno de la computadora
 * @param {number} puntosMinimos puntos mínimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elemento HTML para mostrar los puntos
 * @param {divCartasComputadora} elemento HTML para mostrar las cartas
 * @param {Array<String>} deck (ツ)
 */
export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = []) => {

    if ( !puntosMinimos )throw new Error('PuntosMinimos se pudrio');
    if ( !puntosHTML )throw new Error('puntosHTML se pudrio');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('HA! Ni uno de los 2 ganó, me quedo con el dinero💸 >:D')
        } else if ( puntosMinimos > 21 ) {
            alert('Tenia sentido que la computadora ganara (ツ)')
        } else if( puntosComputadora > 21 ) {
            alert('En serio ._. , 🥇ganaste?')
        } else {
            alert('Este mensaje esta clonado pero lo pondre XD, pero tenia sentido que la computadora ganara (ツ) ')
        }
    }, 100 );
}