import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./Components/UserAuth/Login"
import PrivateRoute from './Components/PrivateRoute';
import Onboarding from './Components/Onboarding/Onboarding'
import './App.css';
import { AuthProvider } from './Context/AuthContext';
import ForgotPassword from './Components/UserAuth/ForgotPassword';
import Signup from './Components/Onboarding/Signup';
import HoldingList from './Pages/HoldingList';
import Layout from './Components/Layout';
import Company from './Pages/Company';
import HoldingDetails from './Pages/HoldingDetails';
import Profiles from './Pages/Profiles';
import UserProfile from './Pages/UserProfile';
import HoldingProvider from "./Context/HoldingContext";
import PropertyTypeProvider from "./Context/PropertyTypeContext";

function App() {

  return (
        <Router>
          <AuthProvider>
            <HoldingProvider>
              <PropertyTypeProvider>
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
                      <Route path='property/:slug' element={<PrivateRoute><HoldingDetails /></PrivateRoute>} />
                      <Route path='*' element={<Login />} />
                    </Route>
                </Routes>
              </PropertyTypeProvider>
            </HoldingProvider>
          </AuthProvider>
        </Router>
    );
}

export default App;
