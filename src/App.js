
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Faqs from './pages/Faqs';
import Contacts from './pages/Contacts';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import AmlPolicy from './pages/AmlPolicy';
import NavBar from './components/NavBar';
import LogIn from './pages/LogIn';





function App() {
  return (

    <>
    <Router>
        <NavBar/>
        <Routes>
          
          <Route path='/' element={<Home/>}></Route>
          <Route path='/features' element={<Features />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/faqs' element={<Faqs />}></Route>
          <Route path='/contacts' element={<Contacts />}></Route>
          <Route path='/log-in' element={<LogIn/>}></Route>
          <Route path='/terms' element={<Terms />}></Route>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
          <Route path='/aml-policy' element={<AmlPolicy />}></Route>

        </Routes>

    </Router>
     
     

    </>


  );
}

export default App;
