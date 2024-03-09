import { Grid, Button, Typography, Box, TextField } from '@mui/material';
import AppBarSearch from '../components/AppBarSearch';
import { BorderColor } from '@mui/icons-material';
import Footer from '../components/Footer';

function DetalheProduto() {

    const product = { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ullam maiores rerum. Est, atque? Doloribus cupiditate voluptatibus facere corporis, illo sit? Consequuntur blanditiis ratione voluptatem molestiae consectetur, rerum quas quam.' };

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch />

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Grid container spacing={2} item xs={12} sx={{ height: 'auto', width: '80vw' }}>

                        <Grid container item xs={12} md={8} sx={{ height: '35rem', width: 'auto', marginTop: '1.5rem' }}>
                            <Grid container sx={{ height: '100%', backgroundColor: 'white', borderRadius: '10px' }}>

                                <Grid item xs={7} sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <img src={product.image} alt={product.name} style={{ width: '60%', height: '60%', objectFit: 'contain' }} />
                                </Grid>

                                <Grid container item xs={5} sx={{ height: '100%', display: 'flex', alignContent: 'start' }}>
                                    <Grid item xs={12} sx={{ marginTop: '3rem' }}>
                                        <Typography variant="h4" paddingLeft={'5.6rem'}>
                                            {product.name}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography variant="h6" sx={{ margin: '1.25rem' }}>
                                            {product.description}
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ height: '35rem', width: 'auto', marginTop: '1.5rem' }}>
                            <Grid container sx={{ backgroundColor: 'white', borderRadius: '10px', height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'space-evenly', justifyContent: 'center' }}>
                                <Typography variant="h4" sx={{ marginBottom: '1.5rem' }}>
                                    R$ 2.470,58
                                </Typography>
                                <div style={{ borderTop: '1px solid #e5e5e5', height: '1px', width: '90%', marginTop: '2rem' }} />
                                <Typography variant="h6" sx={{ marginTop: '2rem' }}>
                                    Calcule o frete:
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                                    <TextField size="small" variant="outlined" sx={{ width: '75%' }} />
                                    <Button variant="contained" color="primary" size="small" sx={{ marginLeft: '0.5rem' }}>
                                        OK
                                    </Button>
                                </Box>
                                <div style={{ borderTop: '1px solid #e5e5e5', height: '1px', width: '90%', marginTop: '3rem' }} />
                                <Button variant="contained" color="primary" sx={{ height: '3.7rem', width: '14rem', fontSize: '1rem', marginTop: '3.3rem' }}>
                                    Comprar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>

            <Footer/>
        </>
    );
}


export default DetalheProduto;