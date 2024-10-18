import React, { useState } from 'react';
import { Button, Box, Typography, IconButton, TextField } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import DeleteIcon from '@mui/icons-material/Delete';
import PopupDialog from '../../pages/library'; // Import the PopupDialog component
import ShareIcon from '@mui/icons-material/Share';

const MusicComponent = () => {
  const [musicList, setMusicList] = useState([
    { id: 1, title: 'Ronald rich playlist', isPlaying: false },
    { id: 2, title: 'Another playlist', isPlaying: false },
  ]); // Initial music list
  const [newMusic, setNewMusic] = useState(''); // New music input state
  const [isDialogOpen, setDialogOpen] = useState(false); // State for managing the popup dialog

  // Toggle play/pause for a specific track
  const togglePlay = (id: any) => {
    setMusicList((prevList) =>
      prevList.map((music) => (music.id === id ? { ...music, isPlaying: !music.isPlaying } : music))
    );
  };

  // Add new music track to the list
  const addMusic = () => {
    if (newMusic.trim()) {
      const newTrack = { id: Date.now(), title: newMusic.trim(), isPlaying: false };
      setMusicList([...musicList, newTrack]);
      setNewMusic(''); // Clear input after adding
    }
  };

  // Delete a music track from the list
  const deleteMusic = (id: any) => {
    setMusicList(musicList.filter((music) => music.id !== id));
  };

  // Open dialog
  const handleShareClick = () => {
    setDialogOpen(true);
  };

  // Close dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        fontFamily: 'Arial, sans-serif',
        margin: '30px',
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Music
      </Typography>

      {/* Input field to add new music */}
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Add new music"
          variant="outlined"
          fullWidth
          value={newMusic}
          onChange={(e) => setNewMusic(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={addMusic}
          sx={{
            backgroundColor: '#E0AC3D',
            color: 'white',
            '&:hover': { backgroundColor: '#e6b800' },
          }}
        >
          Add
        </Button>
      </Box>

      {/* Music list */}
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
          }}
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

      <Button
        variant="contained"
        sx={{
          backgroundColor: '#E0AC3D',
          color: 'white',
          width: '50%',
          py: 1.5,
          borderRadius: '25px', // fully rounded sides
          boxShadow: 3,
          '&:hover': { backgroundColor: '#e6b800' },
          margin: 'auto',
          display: 'flex',
        }}
        onClick={handleShareClick}
      >
        <ShareIcon sx={{ mr: 1 }} /> {/* Adding the icon here */}
        Share
      </Button>

      <PopupDialog open={isDialogOpen} onClose={handleCloseDialog} />
    </Box>
  );
};

export default MusicComponent;
