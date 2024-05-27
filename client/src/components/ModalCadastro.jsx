import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import moment from "moment";
import ClienteService from "../services/ClienteService";

function ModalCadastro({ open, setOpen, setOpenModalLogin, setOpenCadastroEndereco, setNewUserId }) {
    const [fieldsError, setFieldsError] = useState(undefined);
    const [registerFields, setRegisterFields] = useState({ nome: '', email: '', senha: '', senhaConfirmar: '', cpf: '', dataNascimento: moment().format('YYYY-MM-DD'), genero: '', telefone: '' });

    const handleCadastrar = async () => {
        try {
            setNewUserId(await ClienteService.salvar({ ...registerFields }));
            console.log("Cliente cadastrado com sucesso!");
        } catch (error) {
            console.error("Falha no cadastro:", error);
        }
    }

    const handleSubmit = () => {
        if (Object.values(registerFields).some(field => field.trim() === '')) {
            setFieldsError('Por favor, preencha todos os campos.');
            return;
        } else if (registerFields.senha !== registerFields.senhaConfirmar) {
            setFieldsError('As senhas não coincidem.');
            return;
        } else if (!isPasswordStrong(registerFields.senha)) {
            setFieldsError('A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um número.');
            return;
        }

        handleCadastrar().then(() => {
            handleClose();
            setOpenCadastroEndereco(true);
        });
    }

    const handleClose = () => {
        setOpen(false);
    }

    const formatarCPF = (cpf) => {
        cpf = cpf.replace(/\D/g, '');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
        cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        return cpf;
    }

    const formatarTelefone = (telefone) => {
        telefone = telefone.replace(/\D/g, '');
        telefone = telefone.replace(/^(\d{2})(\d)/g, '($1) $2');
        telefone = telefone.replace(/(\d{5})(\d)/, '$1-$2');
        return telefone;
    }

    const handleCPFChange = (event) => {
        const formattedCPF = formatarCPF(event.target.value);
        setRegisterFields({ ...registerFields, cpf: formattedCPF });
    };

    const handleTelefoneChange = (event) => {
        const formattedPhone = formatarTelefone(event.target.value);
        setRegisterFields({ ...registerFields, telefone: formattedPhone });
    };

    const isStrongPassword = (senha) => {
        const hasUpperCase = /[A-Z]/.test(senha);
        const hasLowerCase = /[a-z]/.test(senha);
        const hasNumber = /\d/.test(senha);

        return hasUpperCase && hasLowerCase && hasNumber;
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
                    Cadastrar
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
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
                                value={registerFields.nome}
                                onChange={(event) => setRegisterFields({ ...registerFields, nome: event.target.value })}
                            />
                        </Grid>
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
                                value={registerFields.cpf}
                                onChange={handleCPFChange}
                                inputProps={{
                                    maxLength: 14,
                                }}
                            />
                        </Grid>
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
                                value={registerFields.dataNascimento}
                                onChange={(event) => setRegisterFields({ ...registerFields, dataNascimento: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="labelGenero">Gênero</InputLabel>
                                <Select
                                    labelId="labelGenero"
                                    id="generoCadastro"
                                    value={registerFields.genero}
                                    onChange={(event) => setRegisterFields({ ...registerFields, genero: event.target.value })}
                                >
                                    <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                    <MenuItem value={'Feminino'}>Feminino</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
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
                                value={registerFields.telefone}
                                onChange={handleTelefoneChange}
                                inputProps={{
                                    maxLength: 15,
                                }}
                            />
                        </Grid>

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
                                value={registerFields.email}
                                onChange={(event) => setRegisterFields({ ...registerFields, email: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
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
                                value={registerFields.senha}
                                onChange={(event) => setRegisterFields({ ...registerFields, senha: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="passwordConfirm"
                                name="passwordConfirm"
                                label="Confirmar Senha"
                                type="password"
                                fullWidth
                                variant="standard"
                                value={registerFields.senhaConfirmar}
                                onChange={(event) => setRegisterFields({ ...registerFields, senhaConfirmar: event.target.value })}
                            />
                        </Grid>
                        {fieldsError && (
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
                                <Typography color="red" variant="subtitle">
                                    {fieldsError}
                                </Typography>
                            </Grid>
                        )}
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={7}>
                            <Button onClick={() => {
                                setOpen(false);
                                setOpenModalLogin(true);
                            }}>
                                Voltar
                            </Button>
                        </Grid>

                        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleClose}>Cancelar</Button>
                            <Button onClick={handleSubmit}>Continuar Cadastro</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalCadastro;