import React from 'react';
import { Typography, Paper } from '@mui/material';

const ToDoList = ({ listOfTask }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant='h2' style={{ marginBottom: '20px', marginTop: '40px', color: '#1976D2', fontWeight: '700' }}>All Tasks List</Typography>
      <Paper
        elevation={3}
        style={{
          marginBottom: '20px',
          padding: '20px',
          width: '300px',
          textAlign: 'center',
          transition: 'transform 0.3s ease-in-out',
          animation: 'fade-in 0.5s ease-out',
          boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
          background: 'linear-gradient(45deg, #0288D1, #26C6DA)',
          borderRadius: '3px',
        }}
      >
        {listOfTask.map((task, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            <Typography variant='h5' gutterBottom sx={{ color: '#FFEB3B' }}><b>Task {index + 1}:</b></Typography>
            <Typography variant='h6' sx={{ marginBottom: '10px', color: '#FFFFFF' }}><b>Title Name:</b> {task.title}</Typography>
            <Typography variant='body1' sx={{ color: '#FFFFFF' }}><b>Description:</b> {task.description}</Typography>
          </div>
        ))}
      </Paper>
    </div>
  );
};

export default ToDoList;
