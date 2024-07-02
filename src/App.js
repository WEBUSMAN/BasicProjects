import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './30 TASKS/NavBar';
import TodoForm from './30 TASKS/todo-List-App/Components/ToDoForm';
import ToDoList from './30 TASKS/todo-List-App/Components/ToDoList';
import CounterApp from './30 TASKS/counter-App/CounterApp';
import LoginForm from './30 TASKS/FormWithFormik/Components/LoginForm';
import ApiApp from './30 TASKS/APIs-App/ApiApp';
import StopWatchApp from './30 TASKS/Stop-Watch-App/StopWatchApp';
import Footer from './30 TASKS/Footer';
import { Typography } from '@mui/material';

function App() {
  const [listOfTask, setListOfTask] = useState([]);

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<WelcomeMessage />} />
        <Route path='/ToDoListApp' element={<TodoForm setListOfTask={setListOfTask} />} />
        <Route path='/ToDoList' element={<ToDoList listOfTask={listOfTask} />} />
        <Route path='/CounterApp' element={<CounterApp />} />
        <Route path='/FormWithFormik' element={<LoginForm />} />
        <Route path='/ApiApp' element={<ApiApp />} />
        <Route path='/StopWatchApp' element={<StopWatchApp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

const WelcomeMessage = () => (
  <Typography gutterBottom style={{ fontSize: '50px', textAlign: 'center', height: '36.7vh', margin: '150px', fontWeight: 'bold', color: '#4CAF50', animation: 'fadeInUp 1s forwards', fontFamily: 'Arial, sans-serif' }}>
    🎆 Welcome To 🎆<br />
    <span style={{ color: '#FF5722', fontSize: '60px' }}>🤩 The Unique Projects Platform 🤩</span>
  </Typography>
);

export default App;