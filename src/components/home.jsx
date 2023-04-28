import './style.css'
import fotoCV from '../../public/img/fotofabricv.jpg'

export const Home = () => {
  return (
  <div className='homePage'> 
   <h1 className=''>Home</h1>
    <img className='imgHome' src= {fotoCV}/>
  </div>
  )
}
