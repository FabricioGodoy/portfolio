import './style.css'
/* import fotoCV from '../../public/img/fotofabricv.jpg' */
import error404 from '../../public/img/404-error.jpg'
import iconJS from '../../public/img/icons8-javascript-48.png'
import reactJs from '../../public/img/reactLogo.png'
import nodeJs from '../../public/img/logoNode.png'

export const Home = () => {
  
  return (
  <>
      <div className='homePage'> 
   
        <div className='containerTitlle'>
          <h3 className='titlleh3'>Hola, soy</h3>
          <h1 className='titlleh1'>Fabricio Godoy</h1>
          <h3 className='titlleh5'>Programador Web Full Stack</h3>
        </div>
    
        <div className='containerImgLogos'>
          
            <img className='imgHome' src= {error404}/>
          
          <div className='containerLogos'>
            <img className='logoIcon' src= {iconJS}/>
            <img className='logoIcon' src= {reactJs}/>
            <img className='logoIcon' src= {nodeJs}/>
          </div>

        </div>

      </div>
  </>
  )
}
