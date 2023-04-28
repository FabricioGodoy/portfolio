import "./navBar.css";

export const NavBar = () => {

  window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  return (
    <header className="header">
      <span className="lineaRoja" />
   
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle">
        <img
          className="menu"
          src="https://img.icons8.com/ios-filled/50/null/menu-rounded.png"
          alt="menu"
        />{" "}
      </label>

      <nav className="navigation">
        <ul>
        <li>
            <a href="/index">Inicio</a>
          {/*   <ul>
              <li>
                <a href="/capacitaciones">Capacitaciones</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg">
                  On Demand
                </a>
              </li>
            </ul> */}
          </li>
          <li>
            <a>Proyectos</a>
            <ul>
              <li>
                <a target="_blank" rel="noreferrer" href="https://backup-llc.netlify.app/">Shop Now llc</a>
              </li>
              <li>
                <a target="_blank" rel="noreferrer" href="https://nsx-llc.netlify.app/">NSX llc</a>{" "}
              </li>
              <li>
                <a  target="_blank" rel="noreferrer" href="https://shopnmia.netlify.app">Shop Now arg</a>
              </li>
            
            </ul>
          </li>
         
     {/*      <li>
            <a>Links Utiles</a>
            <ul>
              <li>
                <a href="/rma">RMA</a>
              </li>
              <li>
                <a href="http://www.solutionboxusa.com/downloads/catalogo-SB-Group.pdf">
                  Catálogo digital
                </a>
              </li>
            </ul>
          </li> */}
     {/*      <li>
            <a>Sedes</a>
            <ul className="listadoScroll">
              <li>
                <a href="https://www.solutionbox.com.ar/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/argentina.png?raw=true" />
                  <br /> Argentina
                </a>
              </li>
              <li>
                <a href="https://www.solutionboxusa.com/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/estadosunidos.png?raw=true" />
                  <br /> Estados Unidos
                </a>
              </li>
            </ul>
          </li> */}
          <li>
            <a>Contacto</a>
         <ul>
              <li>
              <a href="https://www.linkedin.com/in/fabricio-godoy-19b366190/"  target="_blank" rel="noopener noreferrer"> <img className="iconContact"   src="https://img.icons8.com/fluency/48/null/linkedin.png"/></a>
               </li>
             <li>
                <a href="https://github.com/FabricioGodoy"  target="_blank" rel="noopener noreferrer"> <img className="iconContact"  src="https://img.icons8.com/ios-glyphs/30/null/github.png"/></a>
              </li>
              <li>
                <a href="mailto:fabricioagodoy95@gmail.com"  target="_blank" rel="noopener noreferrer"> <img className="iconContact"  src="https://img.icons8.com/3d-fluency/94/null/gmail.png"/></a>
              </li>
              <li>
                <a href="https://wa.me/5492616071144"  target="_blank" rel="noopener noreferrer"> <img className="iconContact"  src="https://img.icons8.com/color/48/null/whatsapp--v1.png"/></a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
     {/*  <a href="/login">
        <img
          src="https://img.icons8.com/pastel-glyph/64/FFFFFF/user-male-circle.png"
          className="iconLogin"
        />
      </a> */}
    </header>
  );
};
