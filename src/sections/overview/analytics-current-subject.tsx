import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import { Box, Typography, Button, Stack } from '@mui/material';
import PopupDialog from '../../pages/library'; // Assuming you have a dialog component for event details
import ViewSong from '../../pages/viewsong'; // Assuming this is for adding new events
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { styled } from '@mui/material/styles';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const localizer = momentLocalizer(moment);

const StyledViewButton = styled(Button)(({ theme }) => ({
  padding: '10px',
  color: 'black',
  backgroundColor: 'rgb(243 244 246)',
  borderRadius: '0px',
  border: '0px solid grey',
  '&:hover': {
    backgroundColor: 'rgb(241 185 66)',
    color: 'white',
  },
}));

const CustomToolbar = ({
  toolbar,
  handleOpenAddSchedule,
}: {
  toolbar: any;
  handleOpenAddSchedule: () => void;
}) => {
  const goToBack = () => {
    toolbar.onNavigate('PREV');
  };

  const goToNext = () => {
    toolbar.onNavigate('NEXT');
  };

  const changeView = (view: string) => {
    toolbar.onView(view); // Updated this line to use onView
  };

  return (
    <Stack sx={{ justifyContent: 'space-between', alignItems: 'self-start', flexDirection: 'row' }}>
      <Stack sx={{ flexDirection: 'row' }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            mb: 2,
            marginRight: '20px',
          }}
        >
          <Button onClick={goToBack} startIcon={<KeyboardArrowLeftIcon />} sx={{ mr: 1 }}></Button>
          <Typography variant="h6">{moment(toolbar.date).format('MMMM YYYY')}</Typography>
          <Button onClick={goToNext} endIcon={<ChevronRightIcon />} sx={{ ml: 1 }}></Button>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <StyledViewButton onClick={() => changeView('day')}>Day</StyledViewButton>
          <StyledViewButton onClick={() => changeView('week')}>Week</StyledViewButton>
          <StyledViewButton onClick={() => changeView('month')}>Month</StyledViewButton>
        </Box>
      </Stack>
      <Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#E0AC3D',
            borderRadius: '30px',
            '&:hover': { backgroundColor: '#c09031' },
            marginLeft: '20px',
          }}
          onClick={handleOpenAddSchedule}
        >
          + Schedule session
        </Button>
      </Box>
    </Stack>
  );
};

const CalendarComponent: React.FC = () => {
  const loadEventsFromLocalStorage = (): Event[] => {
    const storedEvents = localStorage.getItem('calendarEvents');
    const events = storedEvents
      ? JSON.parse(storedEvents)
      : [
          {
            title: 'Jai Shree Raam',
            start: new Date(2024, 9, 27, 8, 45),
            end: new Date(2024, 9, 27, 9, 0),
          },
          {
            title: 'Kesariya',
            start: new Date(2024, 9, 3, 10, 0),
            end: new Date(2024, 9, 3, 10, 30),
          },
        ];

    console.log('Loaded Events:', events);
    return events;
  };

  const [events, setEvents] = useState<Event[]>(loadEventsFromLocalStorage);
  const [openPopupDialog, setOpenPopupDialog] = useState(false);
  const [openAddSchedule, setOpenAddSchedule] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  useEffect(() => {
    localStorage.setItem('calendarEvents', JSON.stringify(events));
  }, [events]);

  const handleOpenAddSchedule = () => {
    setOpenAddSchedule(true);
  };

  const handleCloseAddSchedule = () => {
    setOpenAddSchedule(false);
  };

  const handleSelectEvent = (event: Event) => {
    setSelectedEvent(event);
    setOpenPopupDialog(true);
  };

  const handleClosePopupDialog = () => {
    setOpenPopupDialog(false);
  };

  const addEvent = (newEvent: Event) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    window.location.reload();
  };

  return (
    <Box
      sx={{
        padding: '20px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: 3,
        margin: '30px auto',
        maxWidth: '900px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '20px',
          padding: '20px 20px 10px 20px;',
          borderBottom: '1px solid grey',
        }}
      >
        <Typography variant="h4" component="h2">
          Calendar
        </Typography>
      </Box>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, marginTop: '20px' }}
        onSelectEvent={handleSelectEvent}
        views={['day', 'week', 'month']}
        defaultView="month"
        components={{
          toolbar: (toolbar: any) => (
            <CustomToolbar toolbar={toolbar} handleOpenAddSchedule={handleOpenAddSchedule} />
          ), // Pass handleOpenAddSchedule as a prop
        }}
      />

      <ViewSong open={openAddSchedule} onClose={handleCloseAddSchedule} addEvent={addEvent} />

      {selectedEvent && (
        <PopupDialog
          open={openPopupDialog}
          onClose={handleClosePopupDialog}
          event={selectedEvent}
        />
      )}
    </Box>
  );
};

export default CalendarComponent;
