import "./style.css";
import { Projects } from "./projects/projects";
import { Contact } from "./contact/contact";
import { About } from "./about/about";

export const HomePage = () => {
  return (
    <section className="containerHome">
     
      {/* -----------------about-----------------  */}
      <About />

      {/* -----------------projects-----------------  */}
      
      <Projects />


      {/* -----------------contact-----------------  */}
      <Contact />


    </section>
  );
};
