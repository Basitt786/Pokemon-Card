import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Pokemon from './Pokemon'
import './pokemon.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Pokemon />
    </StrictMode>
)