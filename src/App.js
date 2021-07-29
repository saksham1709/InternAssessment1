import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar';
import Hero from './Hero';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
      </div>
    </Router>
  );
}

export default App;
