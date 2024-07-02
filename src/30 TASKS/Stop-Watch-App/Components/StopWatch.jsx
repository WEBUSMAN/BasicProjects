import React, { useState, useRef } from "react";
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

const StyledStopButton = styled(Button)(({ theme }) => ({
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

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const formatTime = (milliseconds) => {
    const minutes = Math.floor(milliseconds / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);
    const millisecondsFormatted = Math.floor((milliseconds % 1000) / 10);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${millisecondsFormatted < 10 ? "0" : ""}${millisecondsFormatted}`;
  };

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      const startTime = Date.now() - time;
      intervalRef.current = setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
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
      marginTop="161px"
      backgroundColor="#f5f5f5"
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "600", marginBottom: "40px" }}
      >
        StopWatch App
      </Typography>
      <h1 style={{ marginBottom: "30px", fontSize: "2rem", margin: "1rem" }}>
        {formatTime(time)}
      </h1>
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        {!isRunning ? (
          <StyledButton variant="contained" color="primary" onClick={start}>
            Start
          </StyledButton>
        ) : (
          <StyledStopButton
            variant="contained"
            color="secondary"
            onClick={stop}
          >
            Stop
          </StyledStopButton>
        )}
        <StyledResetButton variant="contained" color="error" onClick={reset}>
          Reset
        </StyledResetButton>
      </Box>
    </Box>
  );
};

export default StopWatch;