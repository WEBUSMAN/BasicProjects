import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, Grow, CardMedia, Box, Pagination } from '@mui/material';
import LoaderPage from './LoaderPage'; // Assuming LoaderPage is in a separate file

const ApiAppCode = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const cardsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=f7832ed1ae73456ba4d61c4a3faf9400');
        setData(response.data.articles);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  return (
    <>
      {isLoading ? (
        <LoaderPage />
      ) : (
        <>
        <Typography variant='h2' gutterBottom sx={{display: 'flex', justifyContent: 'center', fontWeight: '600', marginTop: '30px', color: 'orange'}}>Fetch Api App</Typography>
          <Box style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {data.slice(startIndex, endIndex).map((item, index) => (
              <Grow in={true} timeout={index * 300} key={index}>
                <Card style={{ margin: '30px 50px', maxWidth: '350px', borderRadius: '20px', boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)', backgroundColor: '#f0f0f0' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.urlToImage}
                    alt="Placeholder"
                    style={{ borderTopLeftRadius: '20px', borderTopRightRadius: '20px' }}
                  />
                  <CardContent>
                    <Typography variant="h6" style={{ color: 'black', marginBottom: '10px' }}><b>{item.title}</b></Typography>
                    <Typography variant="body1" style={{ color: 'black', marginBottom: '5px' }}><b>Author:</b> {item.author}</Typography>
                    <Typography variant="body2" style={{ color: 'black', marginBottom: '5px' }}><b>Content:</b> {item.content}</Typography>
                    <Typography variant="body2" style={{ color: 'black', marginBottom: '5px' }}><b>Description:</b> {item.description}</Typography>
                    <Typography variant="body2" style={{ color: 'black', marginBottom: '5px' }}><b>Published At:</b> {item.publishedAt}</Typography>
                  </CardContent>
                </Card>
              </Grow>
            ))}
          </Box>
          <Box style={{ display: 'flex', justifyContent: 'center', margin: '60px' }}>
            <Pagination
              count={Math.ceil(data.length / cardsPerPage)}
              page={page}
              onChange={handleChangePage}
              variant="outlined"
              color="primary"
              style={{ '& .MuiPaginationItem-root': { borderRadius: '50%', color: '#fff', backgroundColor: '#3f51b5', margin: '0 3px' }, '& .Mui-selected': { backgroundColor: '#303f9f' } }} // Style pagination items
            />
          </Box>
        </>
      )}
    </>
  );
};

export default ApiAppCode;