import { Grid, Button, Typography, Box, TextField, CardMedia, Card, CardContent } from '@mui/material';
import AppBarSearch from '../components/AppBarSearch';
import Footer from '../components/Footer';
import ProductCardCarrinho from '../components/ProductCardCarrinho';

function Carrinho() {

    const products = [
        { id: 2, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1  },
        { id: 3, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1  },
        { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1  },
        { id: 4, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1  },
        { id: 5, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1  },
        { id: 6, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1  },
        { id: 7, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1  },
        { id: 8, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1  },
        { id: 9, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1  },
        { id: 10, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1  },
        { id: 11, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1  },
        { id: 12, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1 },
    ];

    return (
        <>
            <Grid container sx={{ overflow: 'hidden' }}>
                <AppBarSearch />

                <Grid container item sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

                    <Grid container item spacing={2} xs={12} md={12} sx={{ height: 'auto', width: '91vw', marginTop: '1.5rem' }}>
                        <Grid item xs={12} md={8} sx={{ height: '87vh', overflow: 'scroll' }}>
                                {products.map((product) => (
                                    <Grid item xs={12} key={product.id} sx={{  }}>
                                        <ProductCardCarrinho product={product} />
                                    </Grid>
                                ))}
                        </Grid>

                        <Grid item xs={12} md={4} sx={{ mt: '.5rem' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', height: '18rem', bgcolor: 'white', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                <Box sx={{ borderBottom: '1px solid #000', paddingBottom: '10px', width: '100%' }}>
                                    <Typography variant="h4" sx={{ ml: 1.1, mt: 1.1 }}>
                                        Resumo da compra
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                                    <Typography variant="h6" sx={{ ml: 1.1 }}>
                                        Total produtos
                                    </Typography>
                                    <Typography variant="h6" sx={{ mr: 1.5 }}>
                                        {10}
                                    </Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                                    <Typography variant="h6" sx={{ ml: 1.1 }}>
                                        Total c/ frete
                                    </Typography>
                                    <Typography variant="h6" sx={{ mr: 1.5 }}>
                                        R$ 100,00
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}>
                                    <Button variant="contained" color="primary" sx={{ height: '3.7rem', width: '90%', fontSize: '.9rem' }}>
                                        Fazer Checkout
                                    </Button>
                                </Box>

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