import "./app.scss";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/movies" element={<Home type="movies"/>} />
          <Route path="/series" element={<Home type="series"/>} />
          <Route path="/watch" element={<Watch/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
  );
};

export default App;
