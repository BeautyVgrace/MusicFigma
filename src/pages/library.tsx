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

const PopupDialog = ({ open, onClose }: any) => {
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
          subheader="10:00 - 11:00 AM"
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

          <List sx={{ backgroundColor: '#fff8f8', borderRadius: 1, padding: 1 }}>
            {['Kesariya', 'Kesariya'].map((song, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <Avatar
                    src="https://upload.wikimedia.org/wikipedia/en/9/9f/Brahmastra_Teaser_Poster.jpg" // replace with actual image
                    alt={song}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={song}
                  secondary="Pritam chakraborty - kesariya (from 'brahmastra')"
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
            >
              Show More
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Dialog>
  );
};

export default PopupDialog;
