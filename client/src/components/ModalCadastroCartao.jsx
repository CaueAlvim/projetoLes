import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import ClienteService from "../services/ClienteService";

function ModalCadastroCartao({ open, setOpen, userRegister }) {
    const [fieldsError, setFieldsError] = useState(undefined);
    const [cadastroCartaoFields, setCadastroCartaoFields] = useState({ nomeCartao: '', numeroCartao: '', cvc: '', bandeira: '' });

    const handleCadastrar = async () => {
        try {
            await ClienteService.salvar({...userRegister, cartao: [cadastroCartaoFields]});
            console.log("Cadastro realizado com sucesso!");
        } catch (error) {
            console.error("Falha no cadastro:", error);
        }
    }

    const handleSubmit = () => {
        if (Object.values(cadastroCartaoFields).some(field => field.trim() === '')) {
            setFieldsError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        handleCadastrar();
        handleClose();
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
                    Cadastro de cartão
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            <Typography color="grey" variant="subtitle">
                                Para finalizar vamos cadastrar seu primeiro cartão.
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                required
                                variant="standard"
                                id="nomeCartao"
                                label="Nome no cartão"
                                fullWidth
                                type="text"
                                value={cadastroCartaoFields.nomeCartao}
                                onChange={(event) => setCadastroCartaoFields({ ...cadastroCartaoFields, nomeCartao: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <TextField
                                autoFocus
                                required
                                variant="standard"
                                id="numCartao"
                                label="Nº do cartão"
                                fullWidth
                                type="text"
                                value={cadastroCartaoFields.numeroCartao}
                                onChange={(event) => setCadastroCartaoFields({ ...cadastroCartaoFields, numeroCartao: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6} md={2}>
                            <TextField
                                autoFocus
                                required
                                variant="standard"
                                id="cartaoCvc"
                                label="CVC"
                                fullWidth
                                type="text"
                                value={cadastroCartaoFields.cvc}
                                onChange={(event) => setCadastroCartaoFields({ ...cadastroCartaoFields, cvc: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <TextField
                                autoFocus
                                required
                                variant="standard"
                                id="bandeiraCartao"
                                label="Bandeira"
                                fullWidth
                                type="text"
                                value={cadastroCartaoFields.bandeira}
                                onChange={(event) => setCadastroCartaoFields({ ...cadastroCartaoFields, bandeira: event.target.value })}
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

                        </Grid>

                        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={handleSubmit}>Finalizar Cadastro</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalCadastroCartao;