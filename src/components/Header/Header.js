import "./Header.css";

const Header = () => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      Movie Recomendation System
    </span>
  );
};

export default Header;
