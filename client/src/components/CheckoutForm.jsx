import { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { Grid, Button, FormControl, Select, InputLabel, MenuItem, ThemeProvider } from '@mui/material';
import ModalCadastroCartao from './ModalCadastroCartao';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import ModalCadastroEndereco from './ModalCadastroEndereco';


const theme = createTheme({
    palette: {
        myred: {
            main: '#e40024',
            light: '#e5000f',
            dark: '#b3000f',
        },
    },
})

function CheckoutForm({ listaCartoes, listaEnderecos, user, cardFields, setCardFields, enderecoField, setEnderecoField }) {
    const [modalCartaoOpen, setModalCartaoOpen] = useState(false);
    const [modalEnderecoOpen, setModalEnderecoOpen] = useState(false);

    const handleAddCardField = () => {
        const newId = cardFields.length + 1;
        setCardFields([...cardFields, { cardFieldId: newId }]);
    };

    const handleRemoveCardField = () => {
        if (cardFields.length > 1) {
            setCardFields(cardFields.slice(0, -1));
        }
    };

    const handleCardChange = (id, value) => {
        setCardFields(cardFields.map(field =>
            field.cardFieldId === id ? { ...field, cartaoInfo: value } : field));
    };

    return (
        <>
            <ModalCadastroCartao open={modalCartaoOpen} setOpen={setModalCartaoOpen} newUserId={user?.id} isCheckout={true} />
            <ModalCadastroEndereco open={modalEnderecoOpen} setOpen={setModalEnderecoOpen} newUserId={user?.id} isCheckout={true} />

            <Grid container sx={{ my: 2 }}>
                <Grid item xs={6} sx={{ paddingLeft: 1 }} >
                    <Button fullWidth variant='outlined' onClick={() => setModalEnderecoOpen(true)} >
                        Novo endereço <AddLocationIcon />
                    </Button>
                </Grid>
                <Grid item xs={6} sx={{ paddingLeft: 1, paddingRight: 1 }} >
                    <Button fullWidth variant='outlined' onClick={() => setModalCartaoOpen(true)} >
                        Novo cartão <AddCardIcon />
                    </Button>
                </Grid>
            </Grid>

            <Grid container >

                <Grid container item xs={6}>
                    <FormControl fullWidth variant='filled' sx={{ paddingLeft: 1 }}>
                        <InputLabel id={'labelSelecionarEndereco'}>SELECIONAR ENDEREÇO</InputLabel>
                        <Select
                            labelId={'labelSelecionarEndereco'}
                            id={'selecionarEnderecoCheckout'}
                            value={enderecoField}
                            onChange={(event) => setEnderecoField(event.target.value)}
                        >
                            {listaEnderecos.map(endereco => {
                                const enderecoInfo = `${endereco.enderecoId} - ${endereco.rua} ${endereco.numero}, ${endereco.bairro}, ${endereco.estado}`;

                                return (
                                    <MenuItem key={endereco.enderecoId} value={enderecoInfo}>
                                        {enderecoInfo}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid container item xs={6} sx={{ width: 'auto', alignItems: 'center', maxHeight: '16rem', overflowY: 'scroll', overflowX: 'hidden' }}>
                    {cardFields.map(field => (
                        <Grid item xs={field.cardFieldId === 1 ? 12 : 10} key={field.cardFieldId}>
                            <FormControl variant='filled' sx={{ width: '99%', paddingRight: 1.5, ml: 1, mb: 1 }}>
                                <InputLabel id={'labelSelecionarCartao'}>SELECIONAR CARTÃO</InputLabel>
                                <Select
                                    labelId={'labelSelecionarCartao'}
                                    id={'selecionarCartaoCheckout'}
                                    value={field.cartaoInfo || ''}
                                    onChange={(event) => handleCardChange(field.cardFieldId, event.target.value)}
                                >
                                    {listaCartoes.map(cartao => {
                                        const cartaoInfo = `${cartao.cartaoId} - ${cartao.nomeCartao} / ${cartao.numeroCartao} / ${cartao.bandeira}`;

                                        return (
                                            <MenuItem key={cartao.cartaoId} value={cartaoInfo}>
                                                {cartaoInfo}
                                            </MenuItem>
                                        );
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                    ))}

                    {cardFields.length > 1 && (
                        <ThemeProvider theme={theme}>
                            <Grid item xs={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                                <Button variant='outlined' onClick={() => handleRemoveCardField()} color="myred">
                                    <RemoveIcon />
                                </Button>
                            </Grid>
                        </ThemeProvider>
                    )}

                    <Grid item xs={12} sx={{ display: 'flex', alignContent: 'center', mb: 1 }}>
                        <Button fullWidth onClick={handleAddCardField}>
                            <AddIcon />
                        </Button>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}
export default CheckoutForm;