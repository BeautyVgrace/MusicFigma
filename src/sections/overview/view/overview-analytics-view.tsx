import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { _tasks, _posts, _timeline } from 'src/_mock';
import { DashboardContent } from 'src/layouts/dashboard';

import CalendarComponent from '../analytics-current-subject';
import CustomCalendar from '../analytics-conversion-rates';
import Schedule from '../analytics-current-visits';
import MusicComponent from '../analytics-news';
import Footer from '../analytics-order-timeline';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';
import VerticalListItem from 'src/pages/list';

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <VerticalListItem />

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <CalendarComponent />
          </Paper>
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <Paper elevation={3} sx={{ mb: 3, p: 2 }}>
            <CustomCalendar />
          </Paper>

          <Paper elevation={3} sx={{ mb: 3, p: 2 }}>
            <Schedule />
          </Paper>

          <Paper elevation={3} sx={{ mb: 3, p: 2 }}>
            <MusicComponent />
          </Paper>
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <Footer />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
