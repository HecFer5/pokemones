import React from 'react'
import './Buscador.css'
import { Buscar } from './icons'

const Buscador = ({busqueda, setBusqueda, buscarPokemon}) => {
    return (
        <>
            <h3 className='titulo'>Mas de 880 Pokemones, elige tu fravorito</h3>
            <form className='container-buscar' onSubmit={buscarPokemon}>
                <input type="text" placeholder='buscar un Pokemon' className='input-buscar' value={busqueda} onChange={(e) => setBusqueda(e.target.value)}/>
                
                <button className='btn-buscar' type='submit'>
                    <Buscar />
                    Buscar
                </button>
            </form>
        </>
    )
}

export default Buscador