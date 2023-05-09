import './contact.css'

export const Contact = () => {
  return (
    <section id="contact" className='contactContainer'>
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
  )
}
