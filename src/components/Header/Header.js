import "./Header.css";
import Fade from "react-reveal/Fade";
import Button from "@material-ui/core/Button";
const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        boxShadow: "1px 1px 5px black",
        color: "white",
        zIndex: "100",
      }}
    >
      <div style={{ width: "100%" }}>
        <span className="header">
          <Fade top> 🎬 Movie Recommendation System</Fade>
        </span>
      </div>
      <div
        style={{
          width: "20%",
          float: "right",
          zIndex: "10px",
          backgroundImage: "linear-gradient(#39445a,#455880,#39445a)",
          justifyContent: "center",
          paddingTop: "1%",
        }}
      >
        <Button
          variant="outlined"
          color="primary"
          href="/discussion"
          style={{ color: "#ffffff", borderColor: "#ffffff" }}
        >
          DISCUSS
        </Button>
      </div>
    </div>
  );
};

export default Header;
