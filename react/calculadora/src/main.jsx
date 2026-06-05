import { createRoot } from 'react-dom/client'
import './index.css'

import Calculator from './main/Calculator'

const root = document.getElementById('root')
createRoot(root)
  .render(
    <div>
      <h1>Calculatorora</h1>
      <Calculator />
    </div>
  )