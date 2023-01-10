import LandingPage from './components/landingPage';
// import './App.css';
import { BrowserRouter, Routes,  Route, Router } from 'react-router-dom';
import AdminLogin from './components/adminLogin';
import USerLogin from './components/userLogin';
import AdminHome from './components/adminHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>} />
        <Route path='/admin-login' element={<AdminLogin/>}/>
        <Route  path='/user-login' element={<USerLogin/>}/>
        <Route path='/admin/*' element={<AdminHome/>}/>
       
      </Routes >
      </BrowserRouter>
     
    </div>
  );
}

export default App;
