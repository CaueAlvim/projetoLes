import { Button, Grid, Paper, TextField, Typography, styled } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const ChatBubble = styled('div')(({ theme, isSender }) => ({
    padding: theme.spacing(1),
    borderRadius: '10px',
    maxWidth: '70%',
    marginBottom: theme.spacing(1),
    alignSelf: isSender ? 'flex-start' : 'flex-end',
    backgroundColor: isSender ? '#DCF8C6' : '#EAEAEA',
}));

function ChatMessage({ message, isSender }) {
    return (
        <Grid sx={{ display: 'flex', justifyContent: isSender ? 'flex-start' : 'flex-end', marginBottom: '8px' }} >
            <ChatBubble isSender={isSender}>
                <Typography>{message}</Typography>
            </ChatBubble>
        </Grid>
    );
};

function ChatBot() {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatMessage, setChatMessage] = useState('');

    const mandarMensagem = async (mensagem) => {
        console.log(mensagem);
    }

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
                            zIndex: '100'
                        }}
                    >
                        <Grid container sx={{ height: '10%', bgcolor: '#e6e6e6', display: 'flex', alignContent: 'center', borderRadius: '15px 15px 0 0' }}>
                            <Grid item xs={10} >
                                <Typography variant="h5" sx={{ mt: '.5rem', ml: '1rem' }}>
                                    Assistente
                                </Typography>
                            </Grid>
                            <Grid item xs={2} sx={{ pr: '5px', display: 'flex', justifyContent: 'end' }}>
                                <Button onClick={() => setChatOpen(false)} >
                                    <CloseIcon sx={{ fontSize: '2rem' }} />
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ height: '80%' }}>
                            <Grid item xs={12} sx={{ height: '95%', overflowY: 'auto', padding: '1rem' }}>
                                <ChatMessage message='Olá! Como vai?' isSender={true} />
                                <ChatMessage message='Estou bem, obrigado!' isSender={false} />
                                <ChatMessage message='Olá! Como vai?' isSender={true} />
                                <ChatMessage message='Estou bem, obrigado!' isSender={false} />
                                <ChatMessage message='Olá! Como vai?' isSender={true} />
                                <ChatMessage message='Estou bem, obrigado!' isSender={false} />
                                <ChatMessage message='Olá! Como vai?' isSender={true} />
                                <ChatMessage message='Estou bem, obrigado!' isSender={false} />
                            </Grid>
                        </Grid>

                        <Grid container sx={{ height: '10%', bgcolor: '#f1', display: 'flex', alignContent: 'center' }}>
                            <Grid item xs={10}>
                                <TextField
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="cypressChatBotType"
                                    type="text"
                                    fullWidth
                                    variant="standard"
                                    value={chatMessage}
                                    onChange={(event) => setChatMessage(event.target.value)}
                                    sx={{ ml: '.5rem' }}
                                />
                            </Grid>
                            <Grid item xs={2} sx={{ pr: '5px', display: 'flex', justifyContent: 'end' }}>
                                <Button variant="contained" onClick={() => mandarMensagem(chatMessage)} >
                                    <SendIcon sx={{ fontSize: '2rem' }} />
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                )}
        </>
    )
}

export default ChatBot;