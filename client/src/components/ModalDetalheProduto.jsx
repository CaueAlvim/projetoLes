import { forwardRef } from 'react';
import { Dialog, Typography, Grid, AppBar, Toolbar, IconButton, Slide, Card, CardMedia, Divider, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModalDetalheProduto({ open, setOpen, product, handleAddCart }) {

    return (
        <>
            <Dialog
                fullScreen
                open={open}
                onClose={() => setOpen(false)}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative', bgcolor: '#559bbc' }}>
                    <Toolbar>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Detalhes do produto
                        </Typography>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={() => setOpen(false)}
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Grid sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Grid container item xs={12} md={10} sx={{ height: '45rem', width: 'auto', marginTop: '2rem' }}>

                        <Grid item xs={12} md={7} sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'center', justifyContent: 'center',
                            width: '100%', backgroundColor: 'white',
                            borderRadius: '10px 0 0 10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                            <Card sx={{ width: 'auto', height: 'auto' }}>
                                <CardMedia
                                    component="img"
                                    image={`/capas/${product?.caminhoImagem}`}
                                    alt={product?.titulo}
                                    sx={{
                                        height: '30rem',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={5} sx={{
                            display: 'flex', flexDirection: 'column',
                            alignItems: 'flex-start', justifyContent: 'flex-start',
                            width: '100%', backgroundColor: 'white',
                            borderRadius: '0 10px 10px 0', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }}>
                            <Typography variant="h4" sx={{ ml: '1.25rem', mt: '1.25rem', fontWeight: 'bold' }}>
                                {product?.titulo}
                            </Typography>

                            <Divider sx={{ borderTop: '1px solid #e5e5e5', width: '95%', margin: '1rem' }} />

                            <Typography variant="h6" sx={{ margin: '1.25rem' }}>
                                {product?.sinopse}
                            </Typography>

                            <Typography variant="h4" sx={{ mb: 2, mt: 2.5, ml: '1.25rem', fontWeight: 'bold' }}>
                                R$ {product?.valor}
                            </Typography>

                            <Divider sx={{ borderTop: '1px solid #e5e5e5', width: '95%', margin: '1rem' }} />

                            <Typography variant="h5" sx={{ margin: '1.25rem' }}>
                                Detalhes do produto:
                            </Typography>

                            <Grid container sx={{ height: 'auto', mb: '2.5rem' }}>
                                <Grid item xs={6}>
                                    <Grid sx={{ margin: '1.25rem' }}>
                                        <Typography variant="body1">
                                            - Ano: {product?.ano}
                                        </Typography>
                                        <Typography variant="body1">
                                            - Autor: {product?.autor}
                                        </Typography>
                                        <Typography variant="body1">
                                            - Edição: {product?.edicao}
                                        </Typography>
                                        <Typography variant="body1">
                                            - Editora: {product?.editora}
                                        </Typography>
                                        <Typography variant="body1">
                                            - Número de páginas: {product?.numeroPaginas}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item xs={6}>
                                    <Grid sx={{ margin: '1.25rem' }}>
                                        <Typography variant="body1">
                                            - Largura: {product?.largura}
                                        </Typography>
                                        <Typography variant="body1">
                                            - Altura: {product?.altura}
                                        </Typography>
                                        <Typography variant="body1">
                                            - Peso: {product?.peso}
                                        </Typography>
                                        <Typography variant="body1">
                                            - Profundidade: {product?.profundidade}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    sx={{ marginTop: '0.5rem', height: '3rem' }}
                                    onClick={(event) => {
                                        handleAddCart();
                                        event.stopPropagation();
                                    }}
                                >
                                    <AddShoppingCartIcon sx={{ mr: '8px' }} />
                                    ADICIONAR AO CARRINHO
                                </Button>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>

            </Dialog>
        </>
    )
}

export default ModalDetalheProduto;