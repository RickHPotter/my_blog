import { useNavigate } from "react-router-dom";
import "./notfound.scss";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="conteudoContainer">
        <span className="texto404">404</span>
        <h1 className="titulo">Oops. Page Not Found.</h1>
        <p className="paragrafo">
          Are you sure this is what you're looking for?
        </p>
        <p className="paragrafo">Wait and try again sometime later.</p>

        <div className="botaoContainer" onClick={() => navigate(-1)}>
          <button>Back</button>
        </div>
      </div>
    </>
  );
};
