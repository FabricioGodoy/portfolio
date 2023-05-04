/* import fotoCV from '../../public/img/fotofabricv.jpg' */
import error404 from "../../public/img/404-error.jpg";
import iconJS from "../../public/img/icons8-javascript-48.png";
import reactJs from "../../public/img/reactLogo.png";
import nodeJs from "../../public/img/logoNode.png";
import "./style.css";

export const HomePage = () => {
  return (
    <section className="containerHome">
      <div className="aboutMe" id="about">
        <div className="containerTitlle">
          <h3 className="titlleh3">Hola, soy</h3>
          <h1 className="titlleh1">Fabricio Godoy</h1>
          <h3 className="titlleh5">Programador Web Full Stack</h3>
        </div>

        <div className="containerImgLogos">
          <img className="imgHome" src={error404} />

          <div className="containerLogos">
            <img className="logoIcon" src={iconJS} />
            <img className="logoIcon" src={reactJs} />
            <img className="logoIcon" src={nodeJs} />
          </div>
        </div>
      </div>

      {/* -----------------projects-----------------  */}

      <section id="projects">
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://backup-llc.netlify.app/"
          >
            Shop Now llc
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://nsx-llc.netlify.app/"
          >
            NSX llc
          </a>{" "}
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://shopnmia.netlify.app"
          >
            Shop Now arg
          </a>
        </li>
      </section>
      {/* -----------------contact-----------------  */}

      <br />
      <br />
      <br />
      <br />
      <section id="contact">
        <li>
          <a
            href="https://www.linkedin.com/in/fabricio-godoy-19b366190/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}<img
              className="iconContact"
              src="https://img.icons8.com/fluency/48/null/linkedin.png"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/FabricioGodoy"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}<img
              className="iconContact"
              src="https://img.icons8.com/ios-glyphs/30/null/github.png"
            />
          </a>
        </li>
        <li>
          <a
            href="mailto:fabricioagodoy95@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}<img
              className="iconContact"
              src="https://img.icons8.com/3d-fluency/94/null/gmail.png"
            />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/5492616071144"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}<img
              className="iconContact"
              src="https://img.icons8.com/color/48/null/whatsapp--v1.png"
            />
          </a>
        </li>
      </section>
    </section>
  );
};
