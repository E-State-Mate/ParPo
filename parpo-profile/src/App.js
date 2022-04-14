import React, { useState, useEffect } from 'react'
import TabContainer  from './Components/TabContainer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./Components/UserAuth/Login"
import PrivateRoute from './Components/PrivateRoute';
import Onboarding from './Components/Onboarding/Onboarding'
import './App.css';
import { AuthProvider } from './Lib/utils/authContext';
import ForgotPassword from './Components/UserAuth/ForgotPassword';
import Signup from './Components/Onboarding/Signup';
import HoldingList from './Pages/HoldingList';
import Layout from './Components/Layout';
import Company from './Pages/Company';
import HoldingDetails from './Pages/HoldingDetails';
import Profiles from './Pages/Profiles';
import UserProfile from './Pages/UserProfile';

function App() {

  const [imglight, setImglight] = useState(true);
  const [navClass, setNavClass] = useState("");
  const [pos, setPos] = useState(document.documentElement.scrollTop);

  useEffect(() => {
      window.addEventListener("scroll", scrollNavigation, true);
  }, [])

  useEffect(() => {
      return () => {
          window.removeEventListener("scroll", scrollNavigation, true);
      }
    }, []);

  const scrollNavigation = () => {
      const scrollUp = document.documentElement.scrollTop;
      if(scrollUp > pos){
          setNavClass('nav-sticky');
          setImglight(false);
      } else {
          setNavClass('');
          setImglight(true);
      }
  }

  return (
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact element={<Layout />}>
                  <Route path='profiles' element={<PrivateRoute><Profiles /></PrivateRoute>} />
                  <Route path='profile' element={<PrivateRoute><UserProfile /></PrivateRoute>} />
                  <Route path='login' element={<Login />} />
                  <Route path='forgot-password' element={<ForgotPassword />} />
                  <Route path='signup' element={<Signup />} />
                  <Route path='onboarding' element={<PrivateRoute><Onboarding /></PrivateRoute>} />
                  <Route path='holdings' element={<PrivateRoute><HoldingList /></PrivateRoute>} />
                  <Route path='company' element={<PrivateRoute><Company /></PrivateRoute>} />
                  <Route path='details' element={<PrivateRoute><HoldingDetails /></PrivateRoute>} />
                  <Route path='*' element={<Login />} />
                </Route>
            </Routes>
          </AuthProvider>
        </Router>
  );
}

export default App;
