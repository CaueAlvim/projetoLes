import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import EnderecoService from "../services/EnderecoService";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModalCadastroEndereco({ open, setOpen, setOpenModalCartao, newUserId, isCheckout }) {
    const [fieldsError, setFieldsError] = useState(undefined);
    const [cadastroEnderecoFields, setCadastroEnderecoFields] = useState({ cep: '', rua: '', numero: '', bairro: '', cidade: '', estado: '', pais: '', tipoResidencia: '', tipoLogradouro: '' });
    const [cadastroEnderecoObs, setCadastroEnderecoObs] = useState({ observacoes: '' });

    const handleCadastrar = async (endereco) => {
        try {
            await EnderecoService.salvar({ ...endereco, clienteId: newUserId });
            if (isCheckout) {
                toast.success("Endereço cadastrado com sucesso!", {
                    toastId: 'register-success',
                    autoClose: 2000,
                    position: toast.POSITION.BOTTOM_LEFT
                });
                setTimeout(() => {
                    window.location.reload();
                }, 2500);
            }
        } catch (error) {
            console.error("Falha no cadastro:", error);
        }
    }

    const handleSubmit = () => {
        if (Object.values(cadastroEnderecoFields).some(field => field.trim() === '')) {
            setFieldsError('Por favor, preencha todos os campos obrigatórios.');
            return;
        }
        const enderecoCompleto = { ...cadastroEnderecoFields, ...cadastroEnderecoObs };

        handleCadastrar(enderecoCompleto).then(() => {
            !isCheckout && setOpenModalCartao(true);
            handleClose();
        });
    }

    const handleClose = () => {
        setOpen(false);
    }

    function formatarCEP(cep) {
        cep = cep.replace(/\D/g, '');
        cep = cep.replace(/^(\d{5})(\d)/, '$1-$2');
        return cep;
    }

    const handleCepChange = (event) => {
        const formattedCep = formatarCEP(event.target.value);
        setCadastroEnderecoFields({ ...cadastroEnderecoFields, cep: formattedCep });
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
                    Cadastrar endereco
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
                        {newUserId && (
                            <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Typography color="grey" variant="subtitle">
                                    Este primeiro endereço será cadastrado para cobrança e para entrega.
                                </Typography>
                            </Grid>
                        )}

                        <Grid item xs={4}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="cep"
                                name="CEP"
                                label="CEP"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={cadastroEnderecoFields.cep}
                                onChange={handleCepChange}
                                inputProps={{
                                    maxLength: 9,
                                }}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="rua"
                                name="rua"
                                label="Rua"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={cadastroEnderecoFields.rua}
                                onChange={(event) => setCadastroEnderecoFields({ ...cadastroEnderecoFields, rua: event.target.value })}
                            />
                        </Grid>

                        <Grid item xs={4}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="numero"
                                name="numero"
                                label="Número"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={cadastroEnderecoFields.numero}
                                onChange={(event) => setCadastroEnderecoFields({ ...cadastroEnderecoFields, numero: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={8}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="bairro"
                                name="bairro"
                                label="Bairro"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={cadastroEnderecoFields.bairro}
                                onChange={(event) => setCadastroEnderecoFields({ ...cadastroEnderecoFields, bairro: event.target.value })}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="cidade"
                                name="cidade"
                                label="Cidade"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={cadastroEnderecoFields.cidade}
                                onChange={(event) => setCadastroEnderecoFields({ ...cadastroEnderecoFields, cidade: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <FormControl variant="standard" sx={{ m: 1, minWidth: '7.5rem' }}>
                                <InputLabel id="labelEstado">Estado *</InputLabel>
                                <Select
                                    labelId="labelEstado"
                                    id="estadoCadastro"
                                    value={cadastroEnderecoFields.estado}
                                    onChange={(event) => setCadastroEnderecoFields({ ...cadastroEnderecoFields, estado: event.target.value })}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: '250px',
                                                overflow: 'auto',
                                            },
                                        },
                                    }}
                                >
                                    <MenuItem value={'AC'}>AC</MenuItem>
                                    <MenuItem value={'AL'}>AL</MenuItem>
                                    <MenuItem value={'AM'}>AM</MenuItem>
                                    <MenuItem value={'AP'}>AP</MenuItem>
                                    <MenuItem value={'BA'}>BA</MenuItem>
                                    <MenuItem value={'CE'}>CE</MenuItem>
                                    <MenuItem value={'DF'}>DF</MenuItem>
                                    <MenuItem value={'ES'}>ES</MenuItem>
                                    <MenuItem value={'GO'}>GO</MenuItem>
                                    <MenuItem value={'MA'}>MA</MenuItem>
                                    <MenuItem value={'MG'}>MG</MenuItem>
                                    <MenuItem value={'MS'}>MS</MenuItem>
                                    <MenuItem value={'MT'}>MT</MenuItem>
                                    <MenuItem value={'PA'}>PA</MenuItem>
                                    <MenuItem value={'PB'}>PB</MenuItem>
                                    <MenuItem value={'PE'}>PE</MenuItem>
                                    <MenuItem value={'PI'}>PI</MenuItem>
                                    <MenuItem value={'PR'}>PR</MenuItem>
                                    <MenuItem value={'RJ'}>RJ</MenuItem>
                                    <MenuItem value={'RN'}>RN</MenuItem>
                                    <MenuItem value={'RO'}>RO</MenuItem>
                                    <MenuItem value={'RR'}>RR</MenuItem>
                                    <MenuItem value={'RS'}>RS</MenuItem>
                                    <MenuItem value={'SC'}>SC</MenuItem>
                                    <MenuItem value={'SE'}>SE</MenuItem>
                                    <MenuItem value={'SP'}>SP</MenuItem>
                                    <MenuItem value={'TO'}>TO</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="pais"
                                name="pais"
                                label="País"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={cadastroEnderecoFields.pais}
                                onChange={(event) => setCadastroEnderecoFields({ ...cadastroEnderecoFields, pais: event.target.value })}
                            />
                        </Grid>

                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="tipoResidencia"
                                name="tipoResidencia"
                                label="Tipo residência"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={cadastroEnderecoFields.tipoResidencia}
                                onChange={(event) => setCadastroEnderecoFields({ ...cadastroEnderecoFields, tipoResidencia: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="tipoLogradouro"
                                name="tipoLogradouro"
                                label="Tipo logradouro"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={cadastroEnderecoFields.tipoLogradouro}
                                onChange={(event) => setCadastroEnderecoFields({ ...cadastroEnderecoFields, tipoLogradouro: event.target.value })}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="observacoes"
                                name="observacoes"
                                label="Observações"
                                type="text"
                                fullWidth
                                maxRows={4}
                                multiline
                                variant="standard"
                                value={cadastroEnderecoObs.observacoes}
                                onChange={(event) => setCadastroEnderecoObs({ ...cadastroEnderecoObs, observacoes: event.target.value })}
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
                            <Button onClick={handleSubmit}> {newUserId ? 'Continuar Cadastro' : 'Finalizar Cadastro'} </Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalCadastroEndereco;