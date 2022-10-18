import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Company, HoldingDetails, HoldingList, Profiles, UserProfile } from './Pages/pages'
import { Login, PrivateRoute, Onboarding, ForgotPassword, Signup, Layout } from './Components/components'
import { AuthProvider } from './Context/AuthContext';
import HoldingProvider from "./Context/HoldingContext";
import PropertyTypeProvider from "./Context/PropertyTypeContext";
// import { Footer, Game, HowToPlay, Navbar, PingHandler, Settings, SolveToStart, Stats, VersionNotes } from './Components'

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
