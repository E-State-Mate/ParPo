import TabContainer from "./Components/TabContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/UserAuth/Login";
import PrivateRoute from "./Components/PrivateRoute";
import Onboarding from "./Components/Onboarding/Onboarding";
import "./App.css";
import { AuthProvider } from "./Lib/authContext";
import ForgotPassword from "./Components/UserAuth/ForgotPassword";
import Signup from "./Components/Onboarding/Signup";
import HoldingList from "./Pages/HoldingList";
import Layout from "./Components/Layout";

import HoldingProvider from "./Lib/HoldingContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <HoldingProvider>
          <Routes>
            <Route exact path="/" element={<Layout />}>
              <Route
                path="profile"
                element={
                  <PrivateRoute>
                    <TabContainer />
                  </PrivateRoute>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="signup" element={<Signup />} />
              <Route
                path="onboarding"
                element={
                  <PrivateRoute>
                    <Onboarding />
                  </PrivateRoute>
                }
              />
              <Route
                path="holdings"
                element={
                  <PrivateRoute>
                    <HoldingList />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<Login />} />
            </Route>
          </Routes>
        </HoldingProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
