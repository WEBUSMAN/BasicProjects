import React, { useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const NavBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const projects = [
    { name: 'ToDo List App', handler: handleToDoAppChange },
    { name: 'Counter App', handler: handleCounterAppChange },
    { name: 'Login Form', handler: handleLoginFormChange },
    { name: 'Api App', handler: handleApiAppChange },
    { name: 'Stop Watch App', handler: handleStopWatchAppChange },
  ];

  function handleToDoAppChange() {
    navigate('/ToDoListApp');
  };

  function handleCounterAppChange() {
    navigate('/CounterApp');
  };

  function handleLoginFormChange() {
    navigate('/FormWithFormik');
  };

  function handleApiAppChange() {
    navigate('/ApiApp');
  };

  function handleStopWatchAppChange() {
    navigate('/StopWatchApp');
  };

  // Function to filter projects based on search query
  function filterProjects(projects, query) {
    return projects.filter(project =>
      project.name.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Filter projects based on search query
  const filteredProjects = filterProjects(projects, searchQuery);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </Search>
          {filteredProjects.map(project => (
            <Button key={project.name} variant='h6' onClick={project.handler}>
              {project.name}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;