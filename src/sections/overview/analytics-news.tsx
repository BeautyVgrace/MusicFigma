import React, { useState, useEffect } from 'react';
import { Button, Box, Typography, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import PopupDialoglocal from '../../pages/locallibrary';

interface Music {
  id: number;
  title: string;
  isPlaying: boolean;
}

interface Event {
  id: number;
  title: string;
  isPlaying: boolean;
}

const MusicComponent = () => {
  const [musicList, setMusicList] = useState<Music[]>([
    { id: 1, title: 'Ronald rich playlist', isPlaying: false },
  ]);
  const [events, setEvents] = useState<Event[]>([]);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState('');

  useEffect(() => {
    const storedEvents = localStorage.getItem('calendarEvents');
    if (storedEvents) {
      const parsedEvents = JSON.parse(storedEvents);
      const eventTitles = parsedEvents.map((event: any, index: number) => ({
        id: index + 3,
        title: event.title,
        isPlaying: false,
      })) as Event[];
      setEvents(eventTitles);
    }
  }, []);

  const togglePlay = (id: number) => {
    setMusicList((prevList) =>
      prevList.map((music) => (music.id === id ? { ...music, isPlaying: !music.isPlaying } : music))
    );
  };

  const deleteMusic = (id: number) => {
    setMusicList(musicList.filter((music) => music.id !== id));
  };

  const handleShareClick = () => {
    setDialogOpen(true);
  };

  const handleMusicClick = (title: string) => {
    setSelectedTitle(title);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedTitle('');
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        fontFamily: 'Arial, sans-serif',
        // marginTop: '30px',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Music
      </Typography>
      {/* Display existing music list */}
      {musicList.map((music) => (
        <Box
          key={music.id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f9f9f9',
            p: 2,
            mb: 2,
            borderRadius: 1,
            boxShadow: 1,
            cursor: 'pointer',
          }}
          onClick={() => handleMusicClick(music.title)}
        >
          <Typography sx={{ fontWeight: 'bold', color: 'black' }}>{music.title}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => togglePlay(music.id)} sx={{ color: '#ffcc00' }}>
              {music.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton
              onClick={() => deleteMusic(music.id)}
              sx={{ color: '#ccc', '&:hover': { color: '#ff0000' } }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
      {events.map((event) => (
        <Box
          key={event.id}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f0f0f0',
            p: 2,
            mb: 2,
            borderRadius: 1,
            boxShadow: 1,
          }}
          onClick={() => handleMusicClick(event.title)}
        >
          <Typography sx={{ fontWeight: 'bold', color: 'black' }}>{event.title}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton onClick={() => togglePlay(event.id)} sx={{ color: '#ffcc00' }}>
              {event.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
            </IconButton>
            <IconButton
              onClick={() => deleteMusic(event.id)}
              sx={{ color: '#ccc', '&:hover': { color: '#ff0000' } }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      ))}
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#E0AC3D',
          color: 'white',
          width: '50%',
          py: 1.5,
          borderRadius: '25px',
          boxShadow: 3,
          '&:hover': { backgroundColor: '#e6b800' },
          margin: 'auto',
          display: 'flex',
        }}
        onClick={handleShareClick}
      >
        <ShareIcon sx={{ mr: 1 }} />
        Share
      </Button>
      <PopupDialoglocal open={isDialogOpen} onClose={handleCloseDialog} title={selectedTitle} />
    </Box>
  );
};

export default MusicComponent;
