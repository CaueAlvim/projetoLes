import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import ClienteService from "../services/ClienteService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalLogin({ open, setOpen, setOpenModalCadastro }) {
    const [loginFields, setLoginFields] = useState({ email: '', senha: '' });

    const handleLogin = async () => {
        try {
            const user = await ClienteService.login(loginFields);
            if (user) {
                localStorage.setItem('user', JSON.stringify({ id: user?.id, nome: user?.nome, email: user?.email, isAdmin: user?.admin }));
                toast.success("Logado com sucesso!", {
                    toastId: 'login-success',
                    autoClose: 2000,
                    position: toast.POSITION.BOTTOM_LEFT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            }
        } catch (error) {
            toast.error("Falha no login", { toastId: "login-fail" });
        }
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: () => {
                        setOpen(false);
                    },
                }}
            >

                <DialogTitle>
                    Login
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="email"
                                name="email"
                                label="E-mail"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={loginFields.email}
                                onChange={(event) => setLoginFields({ ...loginFields, email: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="password"
                                name="password"
                                label="Senha"
                                type="password"
                                fullWidth
                                variant="standard"
                                value={loginFields.senha}
                                onChange={(event) => setLoginFields({ ...loginFields, senha: event.target.value })}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={7}>
                            <Button onClick={() => {
                                setOpen(false);
                                setOpenModalCadastro(true);
                            }}>
                                Registrar
                            </Button>
                        </Grid>

                        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleClose}>Cancelar</Button>
                            <Button id="cypress-login" onClick={handleLogin}>Login</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalLogin;