import { useState } from 'react';
import { Grid, Button, Typography, Box, TextField, CardMedia, Card, Divider } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import AppBarSearch from '../components/AppBarSearch';
import Footer from '../components/Footer';

function DetalheProduto() {
    const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);
    const product = { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ullam maiores rerum. Est, atque? Doloribus cupiditate voluptatibus facere corporis, illo sit? Consequuntur blanditiis ratione voluptatem molestiae consectetur, rerum quas quam.' };

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch cart={carrinho} setCart={setCarrinho}/>

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Grid container item xs={12} md={10} sx={{ height: '45rem', width: 'auto', marginTop: '1.5rem' }}>

                        <Grid item xs={12} md={7} sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            width: '100%', backgroundColor: 'white',
                            borderRadius: '10px 0 0 10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                            <Card sx={{ width: 'auto', height: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt={product.name}
                                />
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={5} sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'center',
                            width: '100%', backgroundColor: 'white',
                            borderRadius: '0 10px 10px 0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                            <Typography variant="h4" sx={{ ml: '1.25rem', fontWeight: 'bold' }}>
                                {product.name}
                            </Typography>

                            <Typography variant="h6" sx={{ margin: '1.25rem' }}>
                                {product.description}
                            </Typography>

                            <Typography variant="h5" sx={{ mb: 2, mt: 2, ml: '1.25rem', fontWeight: 'bold' }}>
                            {product.price}
                            </Typography>
                            <Divider sx={{ borderTop: '1px solid #e5e5e5', width: '95%', margin: '2rem auto' }} />

                            <Box sx={{ ml: '1.25rem', width: 'auto', display: 'flex', alignItems: 'center', gap: 1, flexDirection: 'row' }}>
                                <Typography variant="h6">
                                    Calcule o frete:
                                </Typography>


                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <TextField size="small" variant="outlined" sx={{ width: '75%' }} />
                                    <Button variant="contained" color="primary" size="small">
                                        OK
                                    </Button>
                                </Box>
                            </Box>

                            <Divider sx={{ borderTop: '1px solid #e5e5e5', width: '95%', margin: '2rem auto' }} />

                            <Grid container spacing={1} sx={{ mt: 1 }}>
                                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="contained" color="primary" sx={{ height: '3.7rem', width: '80%', fontSize: '.9rem' }}>
                                        <LocalMallIcon sx={{ mr: '8px' }}/>
                                        Comprar
                                    </Button>
                                </Grid>
                                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Button variant="contained" color="primary" sx={{ height: '3.7rem', width: '80%', fontSize: '.9rem' }}>
                                        <AddShoppingCartIcon sx={{ mr: '8px' }}/>
                                        Adicionar ao carrinho
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </Grid>

            <Footer />
        </>
    );
}


export default DetalheProduto;