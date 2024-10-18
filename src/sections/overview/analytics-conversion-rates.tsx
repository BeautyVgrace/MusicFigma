import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Box, Typography, Paper } from '@mui/material';
import 'react-calendar/dist/Calendar.css';

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate: any) => {
    setDate(selectedDate);
    console.log('Selected Date:', selectedDate);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // padding: '20px',
        backgroundColor: '#00000',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        // margin: '30px auto',
        maxWidth: '400px',
      }}
    >
      <Paper elevation={3} sx={{ padding: '20px', backgroundColor: 'white' }}>
        <Calendar onChange={handleDateChange} value={date} />
      </Paper>
    </Box>
  );
};

export default CustomCalendar;
