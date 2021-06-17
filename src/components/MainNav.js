import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import TvIcon from "@material-ui/icons/Tv";
import MovieIcon from "@material-ui/icons/Movie";
import SearchIcon from "@material-ui/icons/Search";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import AccountBox from "@material-ui/icons/AccountBox";
import ForumIcon from "@material-ui/icons/Forum";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "#122442",
    zIndex: 100,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();
  const [login, setlogin] = React.useState("Login");

  useEffect(() => {
    if (localStorage.getItem("name") !== null) {
      setlogin(localStorage.getItem("name"));
      console.log("lll");
    }
    if (value === 0) {
      history.push("/");
    } else if (value === 1) {
      history.push("/movies");
    } else if (value === 2) {
      history.push("/signin");
    } else if (value === 3) {
      history.push("/series");
    } else if (value == 4) {
      history.push("/search");
    } else if (value == 5) {
      history.push("/alldiscussions");
    }
  }, [value, history]);

  return (
    <Fade>
      <Fade bottom>
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          showLabels
          className={classes.root}
        >
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Trending"
            icon={<WhatshotIcon />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Movies"
            icon={<MovieIcon />}
          />
          <BottomNavigationAction
            style={{ color: `orange` }}
            label={login}
            icon={<AccountBox />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="TV Series"
            icon={<TvIcon />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Search"
            icon={<SearchIcon />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Discuss"
            icon={<ForumIcon />}
          />
        </BottomNavigation>
      </Fade>
    </Fade>
  );
}
