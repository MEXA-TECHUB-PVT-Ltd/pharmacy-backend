import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Pages/Login'
import '@coreui/coreui/dist/css/coreui.min.css'
import Home from './Pages/Home';
function App() {
  return (
    <>
    <div >
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
        </Routes>
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
        </Routes>
        </Router>
        </div>
        </>
  );
}

export default App;
