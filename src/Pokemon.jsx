import React, { useEffect, useState } from 'react'
import PokemonCards from './PokemonCards';
import '../src/pokemon.css'

export default function Pokemon() {
const [pokemon , Setpokemon] = useState([]);
const [loading , Setloading] = useState(true);
const [error , SetError] = useState(null);
const [search , Setsearch] = useState('')
const Api = 'https://pokeapi.co/api/v2/pokemon?limit=124';

const Pokemonfetch = async () => {
    try {
        const response = await fetch(Api);
        const data = await response.json();
        // console.log(data);
        const pokeCards = data.results.map( async (Curpokemon) => {

        const response = await fetch(Curpokemon.url)
        const data = await response.json();
        return data;
        });
        
        const fetching = await Promise.all(pokeCards);
        console.log(fetching);
        Setpokemon(fetching);
        Setloading(false);
      
        
        
    } catch (error) {
        console.log(error);
        Setloading(false);
        SetError(error);
    }
}
    useEffect(() => {
        Pokemonfetch()
    }, []);

        if (loading) { 
        return ( 
            <center>
        <div>
                <h1>Loading....</h1>
            </div>
            </center>
        )
        };

      const update = pokemon.filter((curen) => curen.name.toLowerCase().includes(search.toLowerCase()))

        if (error) { 
        return ( 
        <div>
                <h1>{error.message}</h1>
            </div>
        )
        }

  return (
    <>
    <section className='Container'>

    <header>
    <h1>Let's Catch Pokemon</h1>
    </header>

    <div className='inputtower'>
        <input type="text" value={search} placeholder='Search Pokemon'  onChange={(e) => Setsearch(e.target.value)} />
    </div>
    <div>
        <ul>
            {
                update.map((Curpokemon) => {
                    return < PokemonCards  key={Curpokemon.id} pokemondata={Curpokemon}/>
                })
            }
        </ul>
    </div>
    </section>
    </>
  )
}
