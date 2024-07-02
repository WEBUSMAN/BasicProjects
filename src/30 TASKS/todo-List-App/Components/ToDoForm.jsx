import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography, Badge, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TodoForm = ({setListOfTask}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskCount, setTaskCount] = useState(0);

  const navigate = useNavigate();

  const handleViewTasks = () => {
    navigate('/ToDoList');
  }

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() && !description.trim()) return;

    setTitle('');
    setDescription('');
    setListOfTask(prevList => [
      ...prevList,
      { title, description }
    ]);
    setTaskCount(taskCount + 1); // Increment task count when a task is added
    console.log("Title: ", title, "Description: ", description);
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    width: '80%',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '51px',
    padding: '60px 20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    height: '350px',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  };

  const textFieldStyle = {
    marginBottom: '16px',
    width: '100%',
    transition: 'width 0.3s ease-in-out',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: '20px', // Adjust margin between buttons
  };

  const buttonStyle1 = {
    width: '48%', // Adjust width to leave some space between buttons
    transition: 'transform 0.3s ease-in-out',
    left: 30
  };

  const buttonStyle2 = {
    width: '120%', // Adjust width to leave some space between buttons
    transition: 'transform 0.3s ease-in-out',
  };

  const badgeStyle = {
    position: 'absolute',
    top: 412,
    right: 40,
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <Typography variant='h3' sx={{ marginBottom: '140px', fontWeight: '700', color: '#1976d2' }}>
        ToDo List App
      </Typography>
      <TextField
        label="Task Title"
        variant="outlined"
        value={title}
        onChange={handleChangeTitle}
        style={textFieldStyle}
        InputProps={{
          style: title.trim() ? textFieldStyle : textFieldStyle,
        }}
      />
      <TextField
        label="Task Description"
        variant="outlined"
        value={description}
        onChange={handleChangeDescription}
        style={textFieldStyle}
        InputProps={{
          style: description.trim() ? textFieldStyle : textFieldStyle,
        }}
      />
      <ButtonGroup style={buttonContainerStyle}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={buttonStyle1}
          onClick={handleSubmit}
        >
          Add Task
        </Button>
        <Badge badgeContent={taskCount} color="secondary" style={badgeStyle}>
          <Button
            variant="contained"
            color="success"
            style={buttonStyle2}
            onClick={handleViewTasks}
          >
            View Tasks
          </Button>
        </Badge>
      </ButtonGroup>
    </form>
  );
};

export default TodoForm;