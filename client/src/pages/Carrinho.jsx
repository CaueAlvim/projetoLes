import { Grid, Button, Typography, Box, TextField, CardMedia, Card, CardContent } from '@mui/material';
import AppBarSearch from '../components/AppBarSearch';
import Footer from '../components/Footer';

function Carrinho() {

    const product = { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ullam maiores rerum. Est, atque? Doloribus cupiditate voluptatibus facere corporis, illo sit? Consequuntur blanditiis ratione voluptatem molestiae consectetur, rerum quas quam.' };

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch />

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>
                    <Grid container spacing={2} xs={12} md={10} sx={{ height: '45rem', width: 'auto', marginTop: '1.5rem' }}>
                        <Grid item xs={12} md={6} sx={{ mt: '1.5rem' }}>
                            <Box sx={{ bgcolor: 'black' }}>

                                oi
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'flex-start',
                            width: '100%',
                            borderRadius: '0 10px 10px 0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                            <Box sx={{ borderBottom: '1px solid #000', paddingBottom: '10px', width: '97%' }}>
                                <Typography variant="h4">
                                    Resumo da compra
                                </Typography>
                            </Box>

                            <Typography variant="h6" sx={{ margin: '1.25rem' }}>
                                {product.description}
                            </Typography>

                            <Typography variant="h5" sx={{ mb: 2, mt: 2, fontWeight: 'bold' }}>
                                R$ 2.470,58
                            </Typography>

                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Calcule o frete:
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TextField size="small" variant="outlined" sx={{ width: '75%' }} />
                                <Button variant="contained" color="primary" size="small">
                                    OK
                                </Button>
                            </Box>

                        </Grid>
                    </Grid>
                </Grid>

                <Footer />
            </Grid>


        </>
    );
}


export default Carrinho;