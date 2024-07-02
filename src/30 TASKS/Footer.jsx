import React from 'react';
import { Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: '#1976d2',
            padding: '20px',
            marginTop: '50px',
            textAlign: 'center',
            color: 'yellow',
            transition: 'background-color 0.3s ease-in-out',
            fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, Oxygen, Ubuntu, Cantarell, \'Open Sans\', \'Helvetica Neue\', sans-serif' 
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant="body1" style={{ margin: '5px' }} data-aos="fade-right">
                    © {new Date().getFullYear()} Get Peoples By Using API 👱
                </Typography>
                <Typography variant="body2" style={{ margin: '5px' }} data-aos="fade-left">
                    Created by <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', ':hover': { color: 'red', transform: 'translateY(-2px)', fontSize: '17px', transition: 'ease all 0.3s' } }}>Usman Chohan</Link>
                </Typography>
            </div>
        </footer>
    );
};

export default Footer;