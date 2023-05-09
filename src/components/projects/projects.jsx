import "./projects.css";

export const Projects = () => {
  return (
    <>
      <h1 className="tittlePpal"> Proyectos </h1>
    <section id="projects" className="projectsContainer">
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          className="linkProjects"
          href="https://backup-llc.netlify.app/"
        >
          <img
            src="../../../public/img/shopnowllc.jpeg"
            className="imgProjects"
          />
          <h2>Shop Now llc</h2>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          className="linkProjects"
          href="https://nsx-llc.netlify.app/"
        >
          <img src="../../../public/img/nsxllc.jpeg" className="imgProjects" />

          <h2>NSX llc</h2>
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          className="linkProjects"
          href="https://shopnmia.netlify.app"
        >
          <img
            src="../../../public/img/shopnowarg.jpeg"
            className="imgProjects"
          />

          <h2>Shop Now arg</h2>
        </a>
      </li>
    </section>
    </>
  );
};
