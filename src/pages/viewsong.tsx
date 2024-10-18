import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Button,
  Card,
  CardHeader,
  CardContent,
  Box,
  TextField,
} from '@mui/material';
import { CalendarToday, Close, Edit, Delete } from '@mui/icons-material';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ViewSong = ({ open, onClose, addEvent }: any) => {
  const [songName, setSongName] = useState(''); // State to store the song name
  const [selectedTime, setSelectedTime] = useState<Date | null>(new Date()); // State to store the selected time

  const handleShowMore = () => {
    if (songName && selectedTime) {
      const newEvent = {
        title: songName, // Set the song name as the event title
        start: selectedTime,
        end: new Date(selectedTime.getTime() + 30 * 60 * 1000), // Default 30 minutes duration
      };

      addEvent(newEvent);
      onClose(); // Close the dialog after adding the event
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          maxWidth: '400px',
          borderRadius: '30px',
          top: '10%',
          transform: 'translateY(-25%)',
        },
      }}
    >
      <Card>
        <CardHeader
          avatar={
            <IconButton sx={{ backgroundColor: '#f1b942', borderRadius: '5px' }}>
              <CalendarToday sx={{ fontSize: '50px', color: '#ffffff' }} />
            </IconButton>
          }
          action={
            <>
              <IconButton>
                <Edit />
              </IconButton>
              <IconButton>
                <Delete />
              </IconButton>
              <IconButton onClick={onClose}>
                <Close />
              </IconButton>
            </>
          }
          title="Add Song Event"
        />
        <CardContent>
          <Typography variant="h6">Enter Song Details</Typography>

          <TextField
            label="Song Name"
            fullWidth
            value={songName}
            onChange={(e) => setSongName(e.target.value)}
            sx={{ marginBottom: 2 }}
          />

          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '1rem' }}>
            Select Time
          </Typography>

          <DatePicker
            selected={selectedTime}
            onChange={(time) => setSelectedTime(time)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            customInput={
              <TextField
                fullWidth
                sx={{ minWidth: '360px' }} // Set the minimum width here
              />
            }
          />

          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button
              sx={{
                backgroundColor: 'transparent',
                color: '#f1b942',
                textTransform: 'none',
                padding: 0,
                minWidth: 'auto',
                '&:hover': {
                  backgroundColor: 'transparent',
                  color: '#f1b942',
                  textDecoration: 'underline',
                },
              }}
              onClick={handleShowMore}
            >
              Add Schedule
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default ViewSong;
