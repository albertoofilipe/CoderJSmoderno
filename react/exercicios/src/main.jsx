import React from 'react'
import { createRoot } from 'react-dom/client'

import Pai from './components/Pai'
import Filho from './components/Filho'

createRoot(document.getElementById('root')).render(
    <div>
        <Pai nome="Alberto" sobrenome="Filipe">
            <Filho nome="Anaize" />
            <Filho nome="Adalberto" sobrenome="Filipe" />
            <Filho nome="Kaká" sobrenome="Filipe" />
        </Pai>
    </div>
)

