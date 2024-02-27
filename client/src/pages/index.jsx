import AppBar from '../components/AppBar'
import Carousel from '../components/Carousel'
import { Grid } from '@mui/material'
import { useState } from 'react';

function Index() {
  const [backgroundColor, setBackgroundColor] = useState('#22272e');

  return (
    <>
      <Grid sx={{ overflow: 'hidden' }}>
        <AppBar />

        <Grid sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', height: 'calc(100vh - 4.2rem)', backgroundColor: backgroundColor, alignItems: 'center' }}>
          <Carousel setBgColor={setBackgroundColor} />

          <Grid sx={{ overflow: 'hidden', backgroundColor: 'white', height: '100%', width: '91vw', borderRadius: '10px' }}>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
            <div>receba</div>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Index