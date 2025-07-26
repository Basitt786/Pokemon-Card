import React from 'react'
import Pokemon from './Pokemon'

export default function PokemonCards({pokemondata}) {
  return (
    <li className='popsigal'>
        <figure>
            <img src={pokemondata.sprites.other.dream_world.front_default} alt={pokemondata.name} className='card' />
        </figure>
        <h1 className='purify'>{pokemondata.name}</h1>
        <div className='butterfly'>
           <p>{pokemondata.types.map((curtype) => curtype.type.name).join(' , ')}</p>
        </div>

        <div className='stats-row'>
            <p className='product'>
                <span>Height :</span>{pokemondata.height}
            </p>

             <p className='product'> 
                <span>Weight :</span>{pokemondata.weight}
            </p>

             <p className='product'>
                <span>Speed :</span>{pokemondata.stats[5].base_stat}
            </p>
        </div>

          <div className='stats-row'>
            <p className='product'>
                <span>Experience :</span>{pokemondata.base_experience}
            </p>

             <p className='product'> 
                <span>Attack :</span>{pokemondata.stats[1].base_stat}
            </p>

             <p className='product'>
                <span>Abilities:</span>
            {pokemondata.abilities
                .map((abilityinfo) => abilityinfo.ability.name)
                .slice(0, 1)
                .join(', ')}
            </p>


        </div>
    </li>
  )
  
}
