import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading({ loading }) {
    return (
        <>
            {loading && (
                <Box sx={{
                    position: 'fixed', display: 'flex', justifyContent: 'center', alignItems: 'center',
                    width: '100vw', height: '100vh', zIndex: 9999, backgroundColor: 'rgba(0, 0, 0, 0.5)'
                }}>
                    <CircularProgress />
                </Box>
            )}
        </>
    )
}

export default Loading;