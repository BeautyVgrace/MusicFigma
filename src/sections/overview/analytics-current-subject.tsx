import React, { useState } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import {
  Box,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const localizer = momentLocalizer(moment);

const CalendarComponent: React.FC = () => {
  const [events, setEvents] = useState([
    {
      title: 'Jai Shree raam',
      start: new Date(2022, 4, 27, 8, 45),
      end: new Date(2022, 4, 27, 9, 0),
    },
    { title: 'Radha 2023', start: new Date(2022, 4, 27, 9, 0), end: new Date(2022, 4, 27, 9, 30) },
    { title: 'B Prank', start: new Date(2022, 4, 27, 10, 0), end: new Date(2022, 4, 27, 10, 30) },
  ]);

  const [newEvent, setNewEvent] = useState({ title: '', start: new Date(), end: new Date() });
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleAddEvent = () => {
    setEvents([...events, newEvent]);
    setNewEvent({ title: '', start: new Date(), end: new Date() });
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#00000',
        borderRadius: '8px',
        boxShadow: 3,
        margin: '50px auto',
        maxWidth: '900px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
        }}
      >
        <Typography variant="h4" component="h2">
          Calendar
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#E0AC3D',
            borderRadius: '30px',
            '&:hover': { backgroundColor: '#c09031' },
          }}
          onClick={handleClickOpen}
        >
          + Schedule session
        </Button>
      </Box>

      {/* Form for adding new event */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Event</DialogTitle>
        <DialogContent>
          <TextField
            label="Event Title"
            fullWidth
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            sx={{ marginBottom: 2 }}
          />
          <Typography>Start Date & Time:</Typography>
          <DatePicker
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start: start ?? new Date() })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="Start Date & Time"
            customInput={<TextField fullWidth />}
            sx={{ marginBottom: 2 }}
          />
          <Typography>End Date & Time:</Typography>
          <DatePicker
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end: end ?? new Date() })}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="End Date & Time"
            customInput={<TextField fullWidth />}
            sx={{ marginBottom: 2 }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{ color: '#E0AC3D' }}>
            Cancel
          </Button>
          <Button onClick={handleAddEvent} sx={{ color: '#E0AC3D' }}>
            Add Event
          </Button>
        </DialogActions>
      </Dialog>

      {/* Calendar view */}
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginTop: '50px' }}
        onSelectEvent={handleSelectEvent}
        eventPropGetter={(event: any) => ({
          style: {
            backgroundColor: event === selectedEvent ? '#E0AC3D' : '',
            color: event === selectedEvent ? 'white' : '',
          },
        })}
      />
    </Box>
  );
};

export default CalendarComponent;
