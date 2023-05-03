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
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
