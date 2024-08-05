import "./App.css";
import {useState} from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import HomeCon, { AboutCon, DonateCon, MedialCon, TeamCon } from "./Routes";
import MedialImg from "./components/Medial/MedialImg";
function App() {
  const [Preloader, setPreloader] = useState(true);

  setTimeout(() => {
    setPreloader(false);
  }, 400000);

  window.addEventListener("load", load);

  function load() {
    setPreloader(false);
  }

  return (
    <div className="App">
      {Preloader && <div id="preloader"></div>}
      <Router>
        <Route path="/Home">
          <HomeCon />
        </Route>
        <Route path="/About">
          <AboutCon />
        </Route>
        <Route path="/Media">
          <MedialCon />
        </Route>
        <Route path="/contact">
          <TeamCon />
        </Route>
        <Route path="*">
          <Redirect to="/Home" />
        </Route>
        <Route path="/medialImg/:id">
          <MedialImg />
        </Route>
        <Route path="/donate">
          <DonateCon />
        </Route>
      </Router>
    </div>
  );
}

export default App;
