import { Button, Grid, Paper, TextField, Typography, styled } from "@mui/material";
import ChatIcon from '@mui/icons-material/Chat';
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AIService from "../services/AIService";

const ChatBubble = styled('div')(({ theme, isSender }) => ({
    padding: theme.spacing(1),
    borderRadius: '10px',
    maxWidth: '70%',
    marginBottom: theme.spacing(1),
    alignSelf: isSender ? 'flex-start' : 'flex-end',
    backgroundColor: isSender ? '#DCF8C6' : '#EAEAEA',
}));

function ChatMessage({ mensagem, isSender }) {
    return (
        <Grid sx={{ display: 'flex', justifyContent: isSender ? 'flex-start' : 'flex-end', marginBottom: '8px' }} >
            <ChatBubble isSender={isSender}>
                <Typography>{mensagem}</Typography>
            </ChatBubble>
        </Grid>
    );
};

function ChatBot() {
    const [chatOpen, setChatOpen] = useState(false);
    const [chatForm, setChatForm] = useState({ clienteId: 0, mensagem: '' });
    const [mensagens, setMensagens] = useState([]);

    useEffect(() => {
        fetchLocalStorage();
    }, []);

    const fetchLocalStorage = async () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setChatForm({ ...chatForm, clienteId: storedUser?.id });
        }
    }

    const mandarMensagem = async () => {
        try {
            const novaMensagem = {
                mensagem: chatForm?.mensagem,
                isSender: true
            };

            const mensagemRecebida = await AIService.chat(chatForm);

            setMensagens([...mensagens, novaMensagem, mensagemRecebida]);
            setChatForm({ ...chatForm, mensagem: '' });
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
        }
    };

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
                                <ChatMessage mensagem='Olá eu sou o assistente virtual do ecommerce Mundo dos livros! No que posso ajudar?' isSender={false} />
                                {mensagens.map((e, index) => (
                                    <ChatMessage key={index} mensagem={e.mensagem} isSender={e.isSender} />
                                ))}
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
                                    value={chatForm.mensagem}
                                    onChange={(event) => setChatForm({ ...chatForm, mensagem: event.target.value })}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            mandarMensagem();
                                        }
                                    }}
                                    sx={{ ml: '.5rem' }}
                                />
                            </Grid>
                            <Grid item xs={2} sx={{ pr: '5px', display: 'flex', justifyContent: 'end' }}>
                                <Button variant="contained" onClick={mandarMensagem} >
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