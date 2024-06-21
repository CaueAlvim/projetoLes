import { Box, Button, Grid, Paper } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from "react";

function ChatBot() {
    const [chatOpen, setChatOpen] = useState(false);

    return (
        <>
            {!chatOpen ? (
                <Button
                    sx={{
                        position: 'fixed',
                        bottom: '20px',
                        left: '20px',
                        bgcolor: '#bc7655',
                        borderRadius: '50%',
                        width: '80px',
                        height: '80px',
                        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                        zIndex: 100,
                        '&:hover': {
                            bgcolor: '#bc7655',
                        },
                    }}
                    onClick={() => setChatOpen(true)}
                >
                    <ChatIcon sx={{ fontSize: '2.5rem', color: 'white' }} />
                </Button>
            )
                : (
                    <Paper
                        elevation={5}
                        sx={{
                            height: '60vh',
                            width: '27vw',
                            bgcolor: 'white',
                            position: 'fixed',
                            bottom: '20px',
                            left: '20px',
                            borderRadius: '15px',
                        }}
                    >
                        <Grid container xs={12} sx={{ height: '10%', bgcolor: 'red' }}>
                            re
                        </Grid>

                        <Grid container xs={12} sx={{ height: '80%', bgcolor: 'blue' }}>
                            ce
                        </Grid>

                        <Box sx={{ height: '10%', bgcolor: 'green' }}>
                            ba
                        </Box>
                    </Paper>
                )}
        </>
    )
}

export default ChatBot;