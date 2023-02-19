
import Login from './pages/Login';
import './App.css';
import Header from './components/shared/Header';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
function App() {
  return (
    <>
         <div>
         <Header />
         <BrowserRouter>
          <Routes>
             <Route path="/"      element={<Home/>}  /> 
             {/* <Route path="/about"      element={<About/>}  />  */}
             <Route path="/login"      element={<Login/>}  />
             <Route path="/signup"      element={<Register/>}  /> 
          </Routes>
         </BrowserRouter>
          
     </div> 
    </>
     
  );
}

export default App;
