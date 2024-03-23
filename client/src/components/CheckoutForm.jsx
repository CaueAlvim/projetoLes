import { Grid, Button, FormControl, TextField, Select, InputLabel, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ArrowBackIosNewTwoToneIcon from '@mui/icons-material/ArrowBackIosNewTwoTone';
import { useState } from 'react';

function CheckoutForm({ newCardForm, setNewCardForm, newAddressForm, setNewAddressForm, handleClickGoBack }) {
    const [chosePaymentMethod, setChosePaymentMethod] = useState(true);

    return (
        <>
            {chosePaymentMethod && (
                <Grid container >

                    <Grid item xs={10}>
                        <FormControl sx={{ m: 1 }}>
                            <FormLabel id="demo-radio-buttons-group-label">Escolha o método de pagamento</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="female"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Cartão de crédito" />
                                <FormControlLabel value="male" control={<Radio />} label="2 Cartões" />
                                <FormControlLabel value="other" control={<Radio />} label="Cupom de troca" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    <Grid item xs={2} sx={{ position: 'relative' }}>
                        <Button
                            variant='contained'
                            sx={{ height: '2.5rem', position: 'absolute', right: 10, bottom: 10 }}
                            onClick={() => setChosePaymentMethod(false)} >Salvar
                        </Button>
                    </Grid>

                </Grid>
            )}

            {!chosePaymentMethod && (
                <Button onClick={() => setChosePaymentMethod(true)} sx={{ my: 2 }}>
                    <ArrowBackIosNewTwoToneIcon /> Selecionar método de pagamento
                </Button>
            )}

            {!newCardForm && !newAddressForm && !chosePaymentMethod && (
                <Grid container sx={{ width: 'auto', alignItems: 'center' }}>
                    <Grid item xs={11}>
                        <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
                            <InputLabel id="demo-simple-select-filled-label">Selecionar cartão cadastrado</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={''}
                                onChange={() => 1}
                            >
                                <MenuItem value={10}>CARTÃO 1</MenuItem>
                                <MenuItem value={20}>CARTÃO 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button onClick={() => setNewCardForm(true)} sx={{ ml: 1 }}>
                            <AddCardIcon />
                        </Button>
                    </Grid>

                    <Grid item xs={11}>
                        <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
                            <InputLabel id="demo-simple-select-filled-label">Selecionar endereço cadastrado</InputLabel>
                            <Select
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled"
                                value={''}
                                onChange={() => 1}
                            >
                                <MenuItem value={10}>ENDEREÇO 1</MenuItem>
                                <MenuItem value={20}>ENDEREÇO 2</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={1} sx={{ display: 'flex', justifyContent: 'center' }} >
                        <Button onClick={() => setNewAddressForm(true)} sx={{ ml: 1 }}>
                            <AddLocationIcon />
                        </Button>
                    </Grid>
                </Grid>
            )}

            {newCardForm && !newAddressForm && !chosePaymentMethod && (
                <Grid container sx={{ width: 'auto', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                    <Grid item xs={10}>
                        <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="nomeCartao"
                                        label="Nome no cartão"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={7}>
                                    <TextField
                                        required
                                        id="numCartao"
                                        label="Nº do cartão"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={2}>
                                    <TextField
                                        required
                                        id="cartaoCvv"
                                        label="CVV"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={3}>
                                    <TextField
                                        required
                                        id="dataValidade"
                                        label="Data de validade"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size='medium' onClick={handleClickGoBack} sx={{ ml: 1, mt: 2 }}>
                            <ArrowBackIosNewTwoToneIcon /> Voltar
                        </Button>
                    </Grid>
                    <Button variant="contained" sx={{ margin: 2 }}>
                        SALVAR
                    </Button>
                </Grid>
            )}

            {!newCardForm && newAddressForm && !chosePaymentMethod && (
                <Grid container sx={{ width: 'auto', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
                    <Grid item xs={10}>
                        <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <TextField
                                        required
                                        id="endRua"
                                        label="Rua"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <TextField
                                        required
                                        id="endCep"
                                        label="CEP"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextField
                                        required
                                        id="endBairro"
                                        label="Bairro"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={5}>
                                    <TextField
                                        required
                                        id="endCidade"
                                        label="Cidade"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={2}>
                                    <TextField
                                        required
                                        id="endEstado"
                                        label="UF"
                                        sx={{ width: '100%' }}
                                    />
                                </Grid>
                            </Grid>
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button size='medium' onClick={handleClickGoBack} sx={{ ml: 1, mt: 2 }}>
                            <ArrowBackIosNewTwoToneIcon /> Voltar
                        </Button>
                    </Grid>
                    <Button variant="contained" sx={{ margin: 2 }}>
                        SALVAR
                    </Button>
                </Grid>
            )}
        </>
    )
}
export default CheckoutForm;