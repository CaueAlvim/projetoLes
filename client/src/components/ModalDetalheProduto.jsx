import { forwardRef } from 'react';
import { Dialog, Typography, Grid, AppBar, Toolbar, IconButton, Slide, Card, CardMedia, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ModalDetalheProduto({ open, setOpen, product }) {

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

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>

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
                                    image={product.imagem}
                                    alt={product.nome}
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
                                {product.nome}
                            </Typography>

                            <Typography variant="h6" sx={{ margin: '1.25rem' }}>
                                {product.descricao}
                            </Typography>

                            <Typography variant="h5" sx={{ mb: 2, mt: 2, ml: '1.25rem', fontWeight: 'bold' }}>
                                {product.preco}
                            </Typography>

                        </Grid>
                    </Grid>
                </Box>

            </Dialog>
        </>
    )
}

export default ModalDetalheProduto;