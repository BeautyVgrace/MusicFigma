import { Label } from 'src/components/label';
import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor width="100%" height="100%" src={`/assets/icons/navbar/${name}.svg`} />
);

export const navData = [
  {
    title: 'Home',
    path: '/',
    icon: icon('home'),
  },
  {
    title: 'Profile',
    path: '/profile',
    icon: icon('profile'),
  },
  {
    title: 'Library',
    path: '/library',
    icon: icon('lib'),
  },
  {
    title: 'Collection', // Dropdown menu
    icon: icon('copy'), // Icon for Collection
    children: [
      {
        title: 'Playlist',
        path: '/collection/playlist',
        icon: icon('list'),
      },
      {
        title: 'Track',
        path: '/collection/track',
        icon: icon('music'),
      },
      {
        title: 'Artist',
        path: '/collection/artist',
        icon: icon('mik'),
      },
      {
        title: 'Album',
        path: '/collection/album',
        icon: icon('disk'),
      },
      {
        title: 'Genres',
        path: '/collection/genres',
        icon: icon('mdisk'),
      },
      {
        title: 'Decades',
        path: '/collection/decades',
        icon: icon('cal'),
      },
      {
        title: 'Geos',
        path: '/collection/geos',
        icon: icon('earth'),
      },
    ],
  },
  {
    title: 'Community',
    path: '/community',
    icon: icon('comm'),
  },
  {
    title: 'Stations', // Dropdown for Stations
    icon: icon('radio'),
    children: [
      {
        title: 'Schedule',
        path: '/stations/schedule',
        icon: icon('calen'),
      },
      {
        title: 'Music Dictionary',
        path: '/stations/music-dictionary',
        icon: icon('mag'),
      },
      {
        title: 'Position Music',
        path: '/stations/position-music',
        icon: icon('star'),
      },
      {
        title: 'Mood Regulation',
        path: '/stations/mood-regulation',
        icon: icon('smile'),
      },
    ],
  },
  {
    title: 'Performance', // Dropdown for Performance
    icon: icon('shie'),
    children: [
      {
        title: 'Calendar',
        path: '/performance/calendar',
        icon: icon('calen'),
      },
      {
        title: 'Groups',
        path: '/performance/groups',
        icon: icon('profile'),
      },
      {
        title: 'Music Analysis',
        path: '/performance/music-analysis',
        icon: icon('list'),
      },
    ],
  },
  {
    title: 'Sign in',
    path: '/sign-in',
    icon: icon('ic-lock'),
  },
];
