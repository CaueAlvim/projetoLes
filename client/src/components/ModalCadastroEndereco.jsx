import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ClienteService from "../services/ClienteService";
import moment from "moment";

function ModalCadastroEndereco({ open, setOpen }) {
    const [loginFields, setLoginFields] = useState({ nome: '', email: '', senha: '', cpf: '', dataNascimento: '' });

    const handleClose = () => {
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
                    Cadastrar endereco
                </DialogTitle>
                <DialogContent>
                    <Grid container spacing={1}>
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
                                value={loginFields.dataNascimento}
                                onChange={(event) => setLoginFields({ ...loginFields, dataNascimento: event.target.value })}
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
                                value={loginFields.dataNascimento}
                                onChange={(event) => setLoginFields({ ...loginFields, dataNascimento: event.target.value })}
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
                                value={loginFields.dataNascimento}
                                onChange={(event) => setLoginFields({ ...loginFields, dataNascimento: event.target.value })}
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
                                value={loginFields.dataNascimento}
                                onChange={(event) => setLoginFields({ ...loginFields, dataNascimento: event.target.value })}
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
                                value={loginFields.dataNascimento}
                                onChange={(event) => setLoginFields({ ...loginFields, dataNascimento: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Grid item xs={3}>
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="labelEstado">Estado</InputLabel>
                                    <Select
                                        labelId="labelEstado"
                                        id="estadoCadastro"
                                        value={loginFields.nome}
                                        onChange={(event) => setLoginFields({ ...loginFields, nome: event.target.value })}
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
                                value={loginFields.dataNascimento}
                                onChange={(event) => setLoginFields({ ...loginFields, dataNascimento: event.target.value })}
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
                                value={loginFields.nome}
                                onChange={(event) => setLoginFields({ ...loginFields, nome: event.target.value })}
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
                                value={loginFields.nome}
                                onChange={(event) => setLoginFields({ ...loginFields, nome: event.target.value })}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="observacoes"
                                name="observacoes"
                                label="Observações"
                                type="text"
                                fullWidth
                                maxRows={4}
                                multiline
                                variant="standard"
                                value={loginFields.dataNascimento}
                                onChange={(event) => setLoginFields({ ...loginFields, dataNascimento: event.target.value })}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-start', mt: 3 }}>
                            <Typography color="grey" variant="subtitle">
                                Este primeiro endereço será cadastrado para cobrança e para entrega.
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={7}>
                            <Button onClick={() => 1}>Voltar</Button>
                        </Grid>

                        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Button onClick={() => 1}>Cadastrar endereco</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalCadastroEndereco;