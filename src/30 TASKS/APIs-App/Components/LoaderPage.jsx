import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { styled } from '@mui/material/styles';

const StyledLoaderContainer = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
});

const StyledCircularProgress = styled(CircularProgress)({
    background: '#1976d2',
    color: 'transparent',
});

const LoaderPage = () => {
    return (
        <StyledLoaderContainer>
            <StyledCircularProgress size={90} thickness={4} />
        </StyledLoaderContainer>
    );
};

export default LoaderPage;