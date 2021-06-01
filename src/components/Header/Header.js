import "./Header.css";
import Fade from "react-reveal/Fade";
const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <Fade top> 🎬 Movie Recommendation System</Fade>
    </span>
  );
};

export default Header;
