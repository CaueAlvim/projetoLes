import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import CartaoService from "../services/CartaoService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalCadastroCartao({ open, setOpen, newUserId, isCheckout }) {
    const [fieldsError, setFieldsError] = useState(undefined);
    const [cadastroCartaoFields, setCadastroCartaoFields] = useState({ nomeCartao: '', numeroCartao: '', cvc: '', bandeira: '' });

    const handleCadastrar = async () => {
        try {
            await CartaoService.salvar({ ...cadastroCartaoFields, clienteId: newUserId });
            toast.success(isCheckout ? "Cartão cadastrado com sucesso!" : "Cadastro finalizado com sucesso!", {
                toastId: 'register-success',
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_LEFT
            });
            setTimeout(() => {
                window.location.reload();
            }, 2500);
        } catch (error) {
            console.error("Falha no cadastro:", error);
        }
    }

    const handleSubmit = () => {
        if (Object.values(cadastroCartaoFields).some(field => field.trim() === '')) {
            setFieldsError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        handleCadastrar().then(() => {
            handleClose();
        });
    }

    const handleClose = () => {
        setOpen(false);
    }

    function formatarCartao(numeroCartao) {
        numeroCartao = numeroCartao.replace(/\D/g, '');
        numeroCartao = numeroCartao.replace(/(\d{4})(?=\d)/g, '$1.');
        return numeroCartao;
    }

    const handleCartaoChange = (event) => {
        const formattedCard = formatarCartao(event.target.value);
        setCadastroCartaoFields({ ...cadastroCartaoFields, numeroCartao: formattedCard });
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
                    Cadastro de cartão
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                            {!isCheckout && (
                                <Typography color="grey" variant="subtitle">
                                    Para finalizar vamos cadastrar seu primeiro cartão.
                                </Typography>
                            )}
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
                                onChange={handleCartaoChange}
                                inputProps={{
                                    maxLength: 19,
                                }}
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
                                inputProps={{
                                    maxLength: 3,
                                }}
                            />
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <FormControl variant="standard" sx={{ minWidth: '8rem' }}>
                                <InputLabel id="labelBandeira">Bandeira *</InputLabel>
                                <Select
                                    labelId="labelEstado"
                                    id="bandeiraCartao"
                                    value={cadastroCartaoFields.bandeira}
                                    onChange={(event) => setCadastroCartaoFields({ ...cadastroCartaoFields, bandeira: event.target.value })}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: '250px',
                                                overflow: 'auto',
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value={'Visa'}>Visa</MenuItem>
                                    <MenuItem value={'Mastercard'}>Mastercard</MenuItem>
                                    <MenuItem value={'AmericanExpress'}>American Express</MenuItem>
                                    <MenuItem value={'Elo'}>Elo</MenuItem>
                                </Select>
                            </FormControl>
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