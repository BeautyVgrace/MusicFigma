import React from 'react';
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
} from '@mui/material';
import { CalendarToday, Close, Edit, Delete } from '@mui/icons-material';

interface PopupDialogProps {
  open: any;
  onClose: () => void;
  title: string; // New prop for title
}

const PopupDialoglocal: React.FC<PopupDialogProps> = ({ open, onClose, title }) => {
  const handleShowMore = () => {
    const newEvent = {
      title: 'New Event from Show More',
      start: new Date(),
      end: new Date(new Date().getTime() + 30 * 60 * 1000),
    };

    onClose();
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
          top: '10%', // Move it slightly up
          transform: 'translateY(-25%)', // Adjusts the vertical positioning
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
          title="15 November"
          subheader="10:00 - 11:00 AM" // This can also be updated dynamically if needed
        />
        <CardContent>
          <Typography variant="h6">Upcoming song for morning prayers</Typography>
          <Typography variant="body2" color="textSecondary" style={{ marginBottom: '1rem' }}>
            Lorem Ipsum Dolor Sit Amet Consectetur. Ultrices Consectetur Est Orci Elementum Commodo
            Velit Nec At Egestas.
          </Typography>

          <Typography variant="body2" color="textPrimary">
            To be played in <span style={{ color: 'green' }}>15 min</span>
          </Typography>

          <Typography variant="h6" style={{ marginTop: '1rem' }}>
            Playlist
          </Typography>

          {/* Dynamic song title based on the selected event */}
          <List sx={{ backgroundColor: '#fff8f8', borderRadius: 1, padding: 1 }}>
            {[title].map((song, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/en/9/9f/Brahmastra_Teaser_Poster.jpg" // replace with actual image
                    alt={song}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={song}
                  secondary="Pritam Chakraborty - Kesariya (from 'Brahmastra')" // Customize this if needed
                />
              </ListItem>
            ))}
          </List>

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
              onClick={handleShowMore} // Add event on click
            >
              Show More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default PopupDialoglocal;
