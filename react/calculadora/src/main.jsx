import { createRoot } from 'react-dom/client'
import './index.css'


import Calculator from './main/Calculator'

createRoot(document.getElementById('root'))
  .render(
    <div>
      <h1>Calculatorora</h1>
      <Calculator />
    </div>
  )