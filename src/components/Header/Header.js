import "./Header.css";
import Zoom from "react-reveal/Zoom";
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <Zoom>Movie Recomendation System</Zoom>
    </span>
  );
};

export default Header;
