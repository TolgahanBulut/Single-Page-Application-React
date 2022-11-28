import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Dashboard/Home"
import Login from "./pages/Dashboard/Login"
import Register from "./pages/Dashboard/Register"
import DashboardLayout from './layouts/Dashboard';


function App() {
  return (
      <BrowserRouter>
        {}
        <Routes>
            <Route path='/' element={<DashboardLayout />}>
              <Route index element={<Home />} />
              <Route path='login' element={<Login />}/>
              <Route path='register' element={<Register />}/>
            </Route>
 
        </Routes>
      </BrowserRouter>
  );
}

export default App;
