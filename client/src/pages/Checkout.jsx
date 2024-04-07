import { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AppBarSearch from '../components/AppBarSearch';
import Footer from '../components/Footer';
import ResumoCompra from '../components/ResumoCompra';
import CheckoutForm from '../components/CheckoutForm';

function Checkout() {
    const products = [
        { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1 },
        { id: 2, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1 },
        { id: 3, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1 },
        { id: 4, name: 'Livro 4', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1 },
        { id: 5, name: 'Livro 5', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1 },
        { id: 6, name: 'Livro 6', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1 },
        { id: 7, name: 'Livro 7', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1 },
        { id: 8, name: 'Livro 8', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1 },
        { id: 9, name: 'Livro 9', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1 },
    ];
    const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);
    const [showNewAddressForm, setShowNewAddressForm] = useState(false);
    const [showNewCardForm, setShowNewCardForm] = useState(false);

    const handleClickGoBack = () => {
        setShowNewCardForm(false);
        setShowNewAddressForm(false);
    }

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch cart={carrinho} setCart={setCarrinho} />
                
                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Grid container item spacing={2} xs={12} md={12} sx={{ height: 'auto', width: '91vw', marginTop: '1.5rem' }}>

                        <Grid item xs={12} md={8} sx={{ height: 'auto', mt: '.5rem' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto', bgcolor: 'white', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <Box sx={{ borderBottom: '1px solid #000', paddingBottom: '10px', width: '100%' }}>
                                    <Typography variant="h4" sx={{ ml: 1.8, mt: 1.8 }}>
                                        Checkout
                                    </Typography>
                                </Box>

                                <CheckoutForm newAddressForm={showNewAddressForm}
                                    newCardForm={showNewCardForm}
                                    setNewAddressForm={setShowNewAddressForm}
                                    setNewCardForm={setShowNewCardForm}
                                    handleClickGoBack={handleClickGoBack} />

                            </Box>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ mt: '.5rem' }}>
                            <ResumoCompra
                                isCheckout={true}
                                quantidadeProdutos={products.length}
                                valorTotal={100}
                                valorFrete={30}
                            />

                        </Grid>
                    </Grid>
                </Grid>

                <Footer />
            </Grid>
        </>
    );
}


export default Checkout;