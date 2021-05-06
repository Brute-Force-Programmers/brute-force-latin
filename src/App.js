import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Resources from "./Pages/Resources"
import Learn from "./Pages/Learn"
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home}></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/resources" component={Resources}></Route>
        <Route path="/learn" component={Learn}></Route>
      </Router>
    </>
  );
}

export default App;
