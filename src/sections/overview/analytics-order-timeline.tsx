import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        paddingTop: '0px',
        paddingBottom: '80px',
        backgroundColor: '#f8f9fa',
        textAlign: 'center',
      }}
    >
      <Box
        component="ul"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          borderBottom: '1px solid #dee2e6',
          paddingBottom: 3,
          marginBottom: 3,
          listStyle: 'none',
          padding: 0,
        }}
      >
        {['Home', 'Features', 'Pricing', 'FAQs', 'About'].map((item) => (
          <Box component="li" sx={{ mx: 2 }} key={item}>
            <Link
              href="#"
              variant="body2"
              sx={{ color: '#6c757d', textDecoration: 'none', '&:hover': { color: '#000' } }}
            >
              {item}
            </Link>
          </Box>
        ))}
      </Box>
      <Typography variant="body2" color="textSecondary">
        © 2022 Company, Inc
      </Typography>
    </Box>
  );
};

export default Footer;
