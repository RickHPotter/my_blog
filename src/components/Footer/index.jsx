import "./footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer--links">
        <li>
          <p>👋</p>
        </li>
        <li>
          <a
            href="https://github.com/RickHPotter"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/luís-henrique-b024b721b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://cursos.alura.com.br/user/luisfla55"
            target="_blank"
            rel="noreferrer"
          >
            Alura
          </a>
        </li>
        <li>
          <a
            href="mailto:luisfla55@hotmail.com"
            target="_blank"
            rel="noreferrer"
          >
            Email
          </a>
        </li>
        <li>
          <a
            href="https://youtu.be/dQw4w9WgXcQ"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};
