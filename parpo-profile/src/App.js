import logo from './logo.svg';
import TabContainer  from './Components/TabContainer'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./Components/UserAuth/Login"
import PrivateRoute from './Components/PrivateRoute';
import './App.css';
import { AuthProvider } from './Lib/authContext';
import ForgotPassword from './Components/UserAuth/ForgotPassword';
import Signup from './Components/UserAuth/Signup';

function App() {
  return (
        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<PrivateRoute><TabContainer /></PrivateRoute>} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/forgot-password' element={<ForgotPassword />} />
                  <Route path='/signup' element={<Signup />} />
            </Routes>
          </AuthProvider>
        </Router>
  );
}

export default App;
