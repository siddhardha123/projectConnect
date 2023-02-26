import Login from "./pages/Login";
import "./App.css";
import Header from "./components/shared/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/shared/Footer";
import PrivateRoute from './PrivateRoute'
import AuthState from "./context/authState";

function App() {
  
  return (
    <>
      
      <div>
      {/* <PrivateRoute> */}
      <AuthState>
        
        <BrowserRouter>
           <Header />
          <Routes>
          
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
          </Routes>
          <Footer />        
        </BrowserRouter>
        </AuthState>
      </div>
     
    </>
  );
}

export default App;
