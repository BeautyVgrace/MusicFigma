import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: '#f8f8f8',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&::before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    // background: 'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&::after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    // background:
    //   'radial-gradient(at center center, rgb(255, 255, 224) 0%, rgba(255, 255, 224, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

const Widget = styled('div')(({ theme }) => ({
  padding: 16,
  borderRadius: 16,
  width: '100%',
  maxWidth: '100%',
  margin: 'auto',
  position: 'relative',
  zIndex: 1,
  backgroundColor: '#FFFFFF',
  backdropFilter: 'blur(40px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  ...theme.applyStyles('dark', {
    backgroundColor: '#FFFFFF',
  }),
}));

const CoverImage = styled('div')({
  width: 100,
  height: 100,
  objectFit: 'cover',
  overflow: 'hidden',
  flexShrink: 0,
  borderRadius: 8,
  backgroundColor: 'rgba(0,0,0,0.08)',
  '& > img': {
    width: '100%',
  },
});

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function MusicPlayerSlider() {
  const duration = 200; // seconds
  const [position, setPosition] = React.useState(32);
  const [paused, setPaused] = React.useState(false);

  function formatDuration(value: number) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed', // Fix the component to the bottom
        bottom: 0, // Align it to the bottom
        left: 0, // Align it to the left
        zIndex: 11111111111, // Make sure it's on top
        p: 1,
        overflow: 'hidden',
        // height: '90px',
      }}
    >
      <Widget>
        {/* Album cover and control buttons */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CoverImage>
            <img
              alt="can't win - Chilling Sunday"
              src="/static/images/sliders/chilling-sunday.jpg"
            />
          </CoverImage>

          {/* Music control buttons on the side of the image */}
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              ml: 2,
              '& svg': {
                color: '#000',
                ...theme.applyStyles('dark', {
                  color: '#fff',
                }),
              },
            })}
          >
            <IconButton aria-label="previous song">
              <FastRewindRounded fontSize="large" />
            </IconButton>
            <IconButton aria-label={paused ? 'play' : 'pause'} onClick={() => setPaused(!paused)}>
              {paused ? (
                <PlayArrowRounded sx={{ fontSize: '3rem' }} />
              ) : (
                <PauseRounded sx={{ fontSize: '3rem' }} />
              )}
            </IconButton>
            <IconButton aria-label="next song">
              <FastForwardRounded fontSize="large" />
            </IconButton>
          </Box>
        </Box>

        {/* Song info and time slider */}
        <Box sx={{ ml: 2, flex: 1 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            Jun Pulse
          </Typography>
          <Typography noWrap>
            <b>Kesariya (Pritam)</b>
          </Typography>
          <Typography noWrap sx={{ letterSpacing: -0.25 }}>
            Chilling Sunday &mdash; Kesariya
          </Typography>

          <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value as number)}
            sx={(t) => ({
              color: 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&::before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${'rgb(0 0 0 / 16%)'}`,
                  ...t.applyStyles('dark', {
                    boxShadow: `0px 0px 0px 8px ${'rgb(255 255 255 / 16%)'}`,
                  }),
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
              ...t.applyStyles('dark', {
                color: '#fff',
              }),
            })}
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: -2 }}>
            <TinyText>{formatDuration(position)}</TinyText>
            <TinyText>-{formatDuration(duration - position)}</TinyText>
          </Box>
        </Box>

        {/* Volume control */}
        <Stack
          spacing={2}
          direction="row"
          sx={(theme) => ({
            mb: 1,
            px: 2,
            '& > svg': {
              color: 'rgba(0,0,0,0.4)',
              ...theme.applyStyles('dark', {
                color: 'rgba(255,255,255,0.4)',
              }),
            },
          })}
          alignItems="center"
        >
          <VolumeDownRounded />
          <Slider
            aria-label="Volume"
            defaultValue={30}
            orientation="vertical"
            sx={(t) => ({
              color: 'rgba(0,0,0,0.87)',
              '& .MuiSlider-track': {
                border: 'none',
              },
              '& .MuiSlider-thumb': {
                width: 24,
                height: 24,
                backgroundColor: '#fff',
                '&::before': {
                  boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible, &.Mui-active': {
                  boxShadow: 'none',
                },
              },
              ...t.applyStyles('dark', {
                color: '#fff',
              }),
            })}
          />
          <VolumeUpRounded />
        </Stack>
      </Widget>
      <WallPaper />
    </Box>
  );
}
