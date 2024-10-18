import React, { useState } from 'react';
import { Box, Typography, Chip, TextField, Button } from '@mui/material';

const Schedule = () => {
  const predefinedSchedules = ['study', 'read', 'write', 'learn'];
  const [schedules, setSchedules] = useState<string[]>(predefinedSchedules);
  const [newSchedule, setNewSchedule] = useState('');

  const handleDeleteSchedule = (scheduleToDelete: string) => {
    setSchedules(schedules.filter((schedule) => schedule !== scheduleToDelete));
  };

  return (
    <Box
      sx={{
        // marginTop: '30px',
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        // maxWidth: '500px',
      }}
    >
      <Typography variant="h5" sx={{ marginBottom: '20px' }}>
        Schedule
      </Typography>

      {/* <Box sx={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <TextField
          label="New Schedule"
          variant="outlined"
          value={newSchedule}
          onChange={(e) => setNewSchedule(e.target.value)}
          sx={{ flexGrow: 1 }}
        />
        <Button
          variant="contained"
          // onClick={handleAddSchedule}
          sx={{
            backgroundColor: '#E0AC3D',
            color: 'white',
            '&:hover': { backgroundColor: '#E0AC3D' },
          }}
        >
          Add
        </Button>
      </Box> */}

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {schedules.map((schedule, index) => (
          <Chip
            key={index}
            label={schedule}
            onDelete={() => handleDeleteSchedule(schedule)}
            variant="outlined"
            sx={{
              padding: '10px 20px',
              borderRadius: '16px',
              transition: 'background-color 0.3s',
              '&:hover': {
                backgroundColor: '#e0e0e0',
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Schedule;
