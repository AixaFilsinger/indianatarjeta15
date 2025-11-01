
import './App.css'
import ReproductorMusic from './views/ReproductorMusic'
import Portada from './views/Portada'
import Frase from './views/Frase'
import CuentaRegresiva from './views/CuentaRegresiva'
import Varios from "./views/Varios"
import Carrusel from './views/Carrusel'

function App() {
  

  return (
    <>
       <aside className='fondo1  d-flex flex-column justify-content-center align-items-center'>
        <Portada></Portada>
         <ReproductorMusic></ReproductorMusic>
      
       </aside>
       <aside className='fondoc'>
        <Frase></Frase>
      <CuentaRegresiva></CuentaRegresiva>
      <Carrusel></Carrusel>
       </aside>
       <Varios></Varios>

     
      
    </>
  )
}

export default App
