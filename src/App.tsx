import { Link } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>React, Node and MySQL</h1>
      <nav>
        <Link to="/videos">See All Videos</Link>
        <Link to="/new">Create New Video</Link>
      </nav>
    </div>
  );
};

export default App;
