import { Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/Home"

function App() {
  return (
      <div className="app">
        App
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </div>
  );
}

export default App;
