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

// ----------------------------------------------------------------------

export function OverviewAnalyticsView() {
  return (
    <DashboardContent maxWidth="xl">
      <Typography variant="h4" sx={{ mb: { xs: 3, md: 5 } }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} md={6} lg={8}>
          <CalendarComponent />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <CustomCalendar />
          <Schedule />
          <MusicComponent />
        </Grid>

        <Grid xs={12} md={12} lg={12}>
          <Footer />
        </Grid>
      </Grid>
    </DashboardContent>
  );
}
