import React, { useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  transition: "background-color 0.3s, transform 0.3s",
  fontSize: "18px",
  "&:hover": {
    backgroundColor: "#4caf50", // Green color on hover
    transform: "scale(1.1)",
  },
}));

const StyledDecrementButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  fontSize: "18px",
  transition: "background-color 0.3s, transform 0.3s",
  "&:hover": {
    backgroundColor: "#f44336", // Red color on hover
    transform: "scale(1.1)",
  },
}));

const StyledResetButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  transition: "background-color 0.3s, transform 0.3s",
  fontSize: "18px",
  "&:hover": {
    backgroundColor: "#2196f3", // Blue color on hover
    transform: "scale(1.1)",
  },
}));

const CounterAppCode = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
      setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
      padding="30px"
      margin="auto"
      width="600px"
      height="300px"
      boxShadow="0px 14px 20px rgba(0, 0, 0, 0.2)"
      fontFamily="Arial, sans-serif"
      fontSize="1.2rem"
      marginTop='161px'
      backgroundColor= '#f5f5f5'
    >
      <Typography variant="h3" gutterBottom sx={{fontWeight: '600', marginBottom: '40px'}}>Counter App</Typography>
      <h1 style={{ marginBottom: '30px', fontSize: "3rem", margin: "1rem" }}>{count}</h1>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        <StyledButton variant="contained" color="primary" onClick={increment}>
          Increment
        </StyledButton>
        <StyledDecrementButton
          variant="contained"
          color="secondary"
          onClick={decrement}
          disabled={count === 0}
        >
          Decrement
        </StyledDecrementButton>
        <StyledResetButton
          variant="contained"
          color="error"
          disabled={count === 0}
          onClick={reset}
        >
          Reset
        </StyledResetButton>
      </Box>
    </Box>
  );
};

export default CounterAppCode;