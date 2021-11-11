import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar"
import { Switch, Route } from "react-router-dom";
import VideoPage from "./Components/VideoPage";
import SearchPage from "./Components/SearchPage";

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <HomePage/>
        </Route>
        <Route exact path="/video">
          <VideoPage/> 
        </Route>
        <Route exact path="/search">
          <SearchPage/> 
        </Route>
        <Route>
          404 not found
        </Route>
      </Switch>
    </div> 
  );
}

export default App;
