import { Grid, Button, Typography, Box, TextField, CardMedia, Card } from '@mui/material';
import AppBarSearch from '../components/AppBarSearch';
import Footer from '../components/Footer';

function DetalheProduto() {

    const product = { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi ullam maiores rerum. Est, atque? Doloribus cupiditate voluptatibus facere corporis, illo sit? Consequuntur blanditiis ratione voluptatem molestiae consectetur, rerum quas quam.' };

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch />

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Grid container item xs={12} md={10} sx={{ height: '45rem', width: 'auto', marginTop: '1.5rem' }}>

                        <Grid container item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', 
                                                                  alignItems: 'center', justifyContent: 'center', 
                                                                  width: '100%', backgroundColor: 'white', 
                                                                  borderRadius: '10px 0 0 10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <Card sx={{ width: 'auto', height: 'auto'}}>
                                <CardMedia
                                    component="img"
                                    image={product.image}
                                    alt={product.name}
                                />
                            </Card>
                        </Grid>

                        <Grid container item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', 
                                                                  alignItems: 'center', justifyContent: 'center', 
                                                                  width: '100%', backgroundColor: 'white', 
                                                                  borderRadius: '0 10px 10px 0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                            <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                                {product.name}
                            </Typography>

                            <Typography variant="h6" sx={{ margin: '1.25rem' }}>
                                {product.description}
                            </Typography>

                            <Typography variant="h4" sx={{ mb: 2, mt: 2, fontWeight: 'bold' }}>
                                R$ 2.470,58
                            </Typography>
                            <Box sx={{ borderTop: '1px solid #e5e5e5', width: '90%', my: 2 }} />
                            <Typography variant="h6" sx={{ mb: 2 }}>
                                Calcule o frete:
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <TextField size="small" variant="outlined" sx={{ width: '75%' }} />
                                <Button variant="contained" color="primary" size="small">
                                    OK
                                </Button>
                            </Box>
                            <Box sx={{ borderTop: '1px solid #e5e5e5', width: '90%', my: 3 }} />
                            <Button variant="contained" color="primary" sx={{ height: '3.7rem', width: '14rem', fontSize: '1rem', mt: 3 }}>
                                Comprar
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>
            </Grid>

            <Footer />
        </>
    );
}


export default DetalheProduto;