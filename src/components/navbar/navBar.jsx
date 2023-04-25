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
            <a>Contactoooo</a>
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
          <li>
            <a>Nosotros</a>
            <ul>
              <li>
                <a href="/nuestraEmpresa">La Empresa</a>
              </li>
              <li>
                <a href="/contacto">Contacto</a>{" "}
              </li>
              <li>
                <a href="/trabajaConNosotros">Trabaja con nosotros</a>
              </li>
              <li>
                <a href="/anticorrupcion">Politica anticorrupción</a>{" "}
              </li>
              <li>
                <a href="#">Staff</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Eventos</a>
            <ul>
              <li>
                <a href="/capacitaciones">Capacitaciones</a>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UCxWedPaJvnyZXCC7f65cdzg">
                  On Demand
                </a>
              </li>
            </ul>
          </li>
          <li>
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
          </li>
          <li>
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
              <li>
                <a href="https://www.solutionbox.com.uy/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/uruguay.png?raw=true" />
                  <br /> Uruguay
                </a>
              </li>
              <li>
                <a href="https://www.solutionbox.com.do/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/Republicadominicana.png?raw=true" />
                  <br />
                  Rep. Dominicana
                </a>
              </li>
              <li>
                <a href="https://www.solutionbox.com.hn/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/honduras.png?raw=true" />
                  <br />
                  Honduras
                </a>
              </li>
              <li>
                <a href="https://www.solutionbox.com.hk/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/hongkong.png?raw=true" />
                  <br /> Hong Kong
                </a>
              </li>
              <li>
                <a href="https://www.solutionbox.com.pa/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/panama.png?raw=true" />
                  <br />
                  Panamá
                </a>
              </li>
              <li>
                <a href="https://www.solutionbox.com.sv/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/elsalvador.png?raw=true" />
                  <br /> El Salvador
                </a>
              </li>
              <li>
                <a href="https://www.solutionbox.com.gt/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/guatemala.png?raw=true" />
                  <br /> Guatemala
                </a>
              </li>
              <li>
                <a href="https://www.solutionbox.com.py/">
                  <img src="https://github.com/RamiroSB/imagenes/blob/main/paraguay.png?raw=true" />
                  <br /> Paraguay
                </a>
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
