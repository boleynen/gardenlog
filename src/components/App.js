import React from "react"
import Signup from "./Signup"
// import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import ProfileSetup from "./ProfileSetup"
import Profile from "./Profile"
import Weather from "./weather/Weather"
import Calendar from "./Calendar"
// import TopNav from '../components/navigation/TopNav';
// import Navigation from '../components/navigation/BottomNav'
import './../style.css';

function App() {
  return (
        <Router>
          <AuthProvider>
            {/* <TopNav/> */}
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/profile" component={Profile} />
              <PrivateRoute path="/weather" component={Weather} />
              <PrivateRoute path="/calendar" component={Calendar} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <PrivateRoute path="/profile-setup" component={ProfileSetup} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
            {/* <Navigation/> */}
          </AuthProvider>
        </Router>
  )
}

export default App