import './style.css'
import fotoCV from '../../public/img/fotofabricv.jpg'

export const Home = () => {
  return (
  <div className='homePage'> 
  
   <div className='containerTitlle'>
     <h3 className='titlleh3'>Hola, soy</h3>
     <h1 className='titlleh1'>Fabricio Godoy</h1>
     <h3 className='titlleh5'>Programador Web Full Stack</h3>
   </div>

    <img className='imgHome' src= {fotoCV}/>
  </div>
  )
}
