import { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import AppBarSearch from '../components/AppBarSearch';
import Footer from '../components/Footer';
import ResumoCompra from '../components/ResumoCompra';
import CheckoutForm from '../components/CheckoutForm';
import CheckoutProducts from '../components/CheckoutProducts';
import CarrinhoService from '../services/CarrinhoService';

function Checkout() {
    const [carrinho, setCarrinho] = useState({});

    useEffect(() => {
        fetchLocalStorage();
    }, []);

    const fetchLocalStorage = async () => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            fetchCarrinho(storedUser.id)
        }
    }

    const fetchCarrinho = async (id) => {
        setCarrinho(await CarrinhoService.carregarCarrinho(id));
    }

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch isCheckout={true} />

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Grid container item spacing={2} xs={12} md={12} sx={{ height: 'auto', width: '91vw', marginTop: '.5rem' }}>

                        <Grid item xs={12} md={8} sx={{ height: 'auto', mt: '.5rem' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto', bgcolor: 'white', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <Box sx={{ borderBottom: '1px solid #000', paddingBottom: '10px', width: '100%' }}>
                                    <Typography variant="h4" sx={{ ml: 1.8, mt: 1.8 }}>
                                        Checkout
                                    </Typography>
                                </Box>

                                <CheckoutForm />

                            </Box>

                            <CheckoutProducts carrinho={carrinho} />

                        </Grid>

                        <Grid item xs={12} md={4} sx={{ mt: '.5rem' }}>
                            <ResumoCompra
                                isCheckout={true}
                                quantidadeProdutos={carrinho?.length}
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