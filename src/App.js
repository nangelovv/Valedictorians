import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import React from 'react';
import Layout from './Layout';
import Home from './pages/Home';
import Seminars from './pages/services/Seminars';
import Groups from './pages/services/Groups';
import MockExams from './pages/services/MockExams';
import Excursions from './pages/services/Excursions';
import Profile from './pages/Profile';
import About from './pages/About';
import Error from './pages/Error';
import Login from './pages/Login';
import Register from './pages/Register';
import Grades from './pages/Grades';


export default function App() {
  // Access the token and date value from the localStorage
  const token = localStorage.getItem('ArsenicToken');
  const date = new Date(localStorage.getItem('ArsenicExpiration'));

  let ExpiredToken = false

  // If a token and date are present in the localStorage, the current date and the toke3n date are compared, 
  // if it is expired, nothing happens, if the current date is smaller than the token date, the variable 
  // 'ExpiredToken' is set to false, so that the user can log in down below
  if (token) {
    if (date) {
      const currentDate = new Date();
      if (currentDate < date) {
        ExpiredToken = false;
      }
    }
  }

  // If the date in the localStorage token is expired, the Login/Register container is shown, 
  // else the MainFeed pages are rendered
  if (ExpiredToken) {
    return (
      <Login />
    );
  }
  else if (!ExpiredToken) {
    return (
      // !!!!! Use HashRouter instead of BrowserRouter while developing !!!!!
      <HashRouter> 
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='services/groups' element={<Groups />} />'
            <Route path='services/seminars' element={<Seminars />} />
            <Route path='services/excursions' element={<Excursions />} />
            <Route path='services/mock-exams' element={<MockExams />} />
            <Route path='about' element={<About />} />
            <Route path='login' element={<Login />} />
            <Route path=':username/grades' element={<Grades />} />
            <Route path='register' element={<Register />} />
            <Route path='profile/:username' element={<Profile />} />
            <Route path='*' element={<Error />} />
          </Route>
        </Routes>
      </HashRouter>
    )
  }
}