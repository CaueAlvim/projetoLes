import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, TextField } from "@mui/material";
import { useState } from "react";
import ClienteService from "../services/ClienteService";

function ModalCadastroLogin({ open, setOpen }) {
    const [register, setRegister] = useState(false);
    const [loginFields, setLoginFields] = useState({ nome: '', email: '', senha: '', cpf: '', telefone: '' });

    const handleLogin = async () => {
        const user = await ClienteService.login(loginFields);
        if (user) {
            localStorage.setItem('user', JSON.stringify({id: user?.id ,nome: user?.nome, email: user?.email, isAdmin: user?.admin }));
            window.location.reload();
            console.log("Logado com sucesso!");
            return;
        }
        console.log(); ("Falha no login!");
    }

    const handleCadastrar = async () => {
        try {
            await ClienteService.salvar(loginFields);
            handleClose();
            console.log("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Falha no cadastro:", error);
        }
    }

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
                            type="text"
                            fullWidth
                            variant="standard"
                            value={loginFields.nome}
                            onChange={(event) => setLoginFields({ ...loginFields, nome: event.target.value })}
                        />
                    )}
                    {register && (
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={loginFields.cpf}
                            onChange={(event) => setLoginFields({ ...loginFields, cpf: event.target.value })}
                        />
                    )}
                    {register && (
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="telefone"
                            name="telefone"
                            label="Telefone"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={loginFields.telefone}
                            onChange={(event) => setLoginFields({ ...loginFields, telefone: event.target.value })}
                        />
                    )}
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
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={7}>
                            {!register ? (
                                <Button onClick={() => setRegister(true)}>Registrar</Button>
                            )
                                :
                                (
                                    <Button onClick={() => setRegister(false)}>Voltar</Button>
                                )}
                        </Grid>

                        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleClose}>Cancelar</Button>
                            {!register ? (
                                <Button onClick={handleLogin}>Login</Button>
                            ) : (
                                <Button onClick={handleCadastrar}>Cadastrar</Button>
                            )}
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalCadastroLogin;