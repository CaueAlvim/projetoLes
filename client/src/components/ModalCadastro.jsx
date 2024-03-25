import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";

function ModalCadastroLogin({ open, setOpen, setIsLogin }) {
    const [register, setRegister] = useState(false);

    const handleClose = () => {
        setRegister(false);
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: () => {
                        console.log(email);
                        setOpen(false);
                    },
                }}
            >

                <DialogTitle>
                    {register ? 'Cadastrar' : 'Login'}
                </DialogTitle>
                <DialogContent>
                    {register && (
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Nome completo"
                            fullWidth
                            variant="standard"
                        />
                    )}
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="email"
                        name="email"
                        label="E-mail"
                        type="email"
                        fullWidth
                        variant="standard"
                    />
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
                    />
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={7}>
                            {!register ? (
                                <Button onClick={() => setRegister(true)} type="submit">Registrar</Button>
                            )
                            :
                            (
                                <Button onClick={() => setRegister(false)} type="submit">Voltar</Button>
                            )}
                        </Grid>

                        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleClose}>Cancelar</Button>
                            <Button type="submit">Login</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalCadastroLogin;