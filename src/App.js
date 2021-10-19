import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './SharedComponent/Menubar/Menubar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Footer from './SharedComponent/Footer/Footer';
import Services from './components/Services/Services';
import DisplayService from './components/DisplayService/DisplayService';
import Appointment from './components/Appointment/Appointment';
import Doctors from './components/Doctors/Doctors';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PageNotFound from './components/PageNotFound/PageNotFound';


function App() {
  return (
    <div >
      <AuthProvider>
        <BrowserRouter>


          <Menubar></Menubar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/display/:serviceKey">
              <DisplayService></DisplayService>
            </PrivateRoute>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <Route path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>

      </AuthProvider>

    </div>
  );
}

export default App;
