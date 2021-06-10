import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Trending from "./Pages/Trending/Trending";
import Search from "./Pages/Search/Search";
import { Container } from "@material-ui/core";
import Signup from "./Pages/Signup/Signup";
import Signin from "./Pages/Signin/Signin";
import PreviousMovies from "./Pages/PreviousMovies/PreviousMovies";
import Discussion from "./components/Discussion/Discussion";
import AllDiscussion from "./components/AllDiscussions/AllDiscussion";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} exact />
            <Route path="/series" component={Series} exact />
            <Route path="/search" component={Search} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/signin" component={Signin} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/discussion" component={Discussion} exact />
            <Route path="/alldiscussions" component={AllDiscussion} />
            <Route path="/pastmovies" component={PreviousMovies} />
            <Route path="/fourms" component={Discussion} />
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
