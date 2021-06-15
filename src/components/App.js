import React from 'react';
import Signup from './Signup';
// import { Container } from "react-bootstrap"
import { AuthProvider } from '../contexts/AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import ForgotPassword from './ForgotPassword';
import UpdateProfile from './UpdateProfile';
import ProfileSetup from './ProfileSetup';
import AddPlants from './AddPlants';
import SensorDetails from './dashboard/SensorDetails';
import Profile from './Profile';
import Weather from './weather/Weather';
import Calendar from './Calendar';
import PlantDetails from './PlantDetails';
import PlantDatabase from './PlantDatabase';
import DatabasePlantDetails from './DatabasePlantDetails';
import './../style.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/weather' component={Weather} />
          <PrivateRoute path='/calendar' component={Calendar} />
          <PrivateRoute path='/update-profile' component={UpdateProfile} />
          <PrivateRoute path='/add-plants' component={AddPlants} />
          <PrivateRoute path='/sensor-details' component={SensorDetails} />
          <PrivateRoute path='/plant-details' component={PlantDetails} />
          <PrivateRoute path='/plant-database' component={PlantDatabase} />
          <PrivateRoute
            path='/database-plant-details'
            component={DatabasePlantDetails}
          />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route path='/profile-setup' component={ProfileSetup} />
          <Redirect to='/dashboard' />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
