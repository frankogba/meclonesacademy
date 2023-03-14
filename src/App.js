import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Aboutus from "./pages/About";
import Admission from "./pages/Admission";
import SchoolLife from "./pages/School";
import Community  from "./pages/Community";
import Login from "./pages/Login";
import History from "./pages/History";
import VisionMission from "./pages/Vision";
import ContactUs from "./pages/Contact";
import Vacancy from "./pages/Vacancy";
import Register from "./components/Register";
// import './

function App () {
  const [currentForm, setCurrentForm] = useState('Login');
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <>
    {
      currentForm === 'Login' ? <Login onFormSwitch ={toggleForm}/> : <Register onFormSwitch={toggleForm} />
    }
    <BrowserRouter>
    <Navbar />
    <Routes>

    <Route path="/" exact component={Home}></Route>
<Route path="/About" component={Aboutus}></Route>
<Route path="/Admission" component={Admission}></Route>
<Route path="/School life" component={SchoolLife}></Route>
<Route path="/Community" component={Community}></Route>
<Route path="/portal login" component={Login}></Route>
<Route path="/History" component={History}></Route>
<Route path="/Vision, mission" component={VisionMission}></Route>
<Route path="/Contact us" component={ContactUs}></Route>
<Route path="/Vacancy" component={Vacancy}></Route>

    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
