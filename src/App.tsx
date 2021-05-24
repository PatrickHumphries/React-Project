import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EventParent from "./components/EventParent";
import { EventContextProvider } from "./context/events-context";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="App">
      <EventContextProvider>
        <Router>
          <Switch>
            <Route path="/favorites">
              <h1>BucketList</h1>
              <Favorites />
            </Route>
            <Route path="/">
              <EventParent />
            </Route>
          </Switch>
        </Router>
      </EventContextProvider>
    </div>
  );
}
export default App;
