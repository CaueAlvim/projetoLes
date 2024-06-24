import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

function Loading({ loading }) {
    return (
        <>
            {loading && (
                <Grid sx={{
                    position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    width: '100vw', height: '100vh', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>
                    <CircularProgress />
                </Grid>
            )}
        </>
    )
}

export default Loading;