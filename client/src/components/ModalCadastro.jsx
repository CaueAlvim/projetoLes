import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import ClienteService from "../services/ClienteService";
import moment from "moment";

function ModalCadastroLogin({ open, setOpen, setOpenCadastroEndereco }) {
    const [register, setRegister] = useState(false);
    const [loginFields, setLoginFields] = useState({ nome: '', email: '', senha: '', cpf: '', dataNascimento: moment().format('YYYY-MM-DD'), genero: '', telefone: '' });

    const handleLogin = async () => {
        const user = await ClienteService.login(loginFields);
        if (user) {
            localStorage.setItem('user', JSON.stringify({ id: user?.id, nome: user?.nome, email: user?.email, isAdmin: user?.admin }));
            window.location.reload();
            console.log("Logado com sucesso!");
            return;
        }
        console.log(); ("Falha no login!");
    }

    const handleCadastrar = async () => {
        try {
            await ClienteService.salvar(loginFields);
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
                        setOpen(false);
                    },
                }}
            >

                <DialogTitle>
                    {register ? 'Cadastrar' : 'Login'}
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        {register && (
                            <Grid item xs={12}>
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
                            </Grid>
                        )}
                        {register && (
                            <Grid item xs={6}>
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
                            </Grid>
                        )}
                        {register && (
                            <Grid item xs={3}>
                                <TextField
                                    autoFocus
                                    required
                                    margin="dense"
                                    id="dtnasc"
                                    name="dtnasc"
                                    label="Data de Nascimento"
                                    type="date"
                                    fullWidth
                                    variant="standard"
                                    value={loginFields.dataNascimento}
                                    onChange={(event) => setLoginFields({ ...loginFields, dataNascimento: event.target.value })}
                                />
                            </Grid>
                        )}
                        {register && (
                            <Grid item xs={3}>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="labelGenero">Gênero</InputLabel>
                                    <Select
                                        labelId="labelGenero"
                                        id="generoCadastro"
                                        value={loginFields.genero}
                                        onChange={(event) => setLoginFields({ ...loginFields, genero: event.target.value })}
                                    >
                                        <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                        <MenuItem value={'Feminino'}>Feminino</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        )}
                        {register && (
                            <Grid item xs={12}>
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
                            </Grid>
                        )}
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
                                <Button onClick={() => {handleCadastrar();
                                                        handleClose();
                                                        setOpenCadastroEndereco(true);}}>Cadastrar</Button>
                            )}
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalCadastroLogin;