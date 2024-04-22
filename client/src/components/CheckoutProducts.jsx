import { Typography, Grid, Box } from '@mui/material';

function CheckoutProducts({ carrinho }) {

    return (
        <>
            {carrinho?.itens && (
                <Box sx={{ display: 'flex', flexDirection: 'column', height: '46vh', bgcolor: 'white', overflowY: 'scroll', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', mt: 2 }}>
                    <Box sx={{ borderBottom: '1px solid #000', width: '100%' }}>
                        <Typography variant="h4" sx={{ ml: 1.8, mt: 1.8, mb: 1 }}>
                            Resumo do pedido
                        </Typography>
                        <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderTop: '1px solid #000' }}>
                            <Grid item xs={2} sx={{ ml: 1, mt: 1 }}>

                            </Grid>

                            <Grid item xs={3} >
                                <Typography variant="h6" sx={{ ml: '1.3rem' }}>
                                    Título
                                </Typography>
                            </Grid>

                            <Grid item xs={3} >
                                <Typography variant="h6" style={{ ml: '1.3rem' }}>
                                    Quantidade
                                </Typography>
                            </Grid>

                            <Grid item xs={2} >
                                <Typography variant="h6" sx={{ ml: '1.3rem' }}>
                                    Valor
                                </Typography>
                            </Grid>

                        </Grid>
                    </Box>

                    {carrinho?.itens?.map((product) => (

                        <Box key={product.livroId} >
                            <Grid container sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Grid item xs={2} sx={{ ml: 1, mt: 1 }}>
                                    <img src={`/capas/${product?.caminhoImagem}`} alt={product?.livroNome} style={{ width: '100px', height: '150px', objectFit: 'cover', borderRadius: '7px' }} />
                                </Grid>

                                <Grid item xs={3} >
                                    <Typography variant="h6" sx={{ ml: '1.3rem' }}>
                                        {product.livroNome}
                                    </Typography>
                                </Grid>

                                <Grid item xs={3} >
                                    <Typography variant="h6" style={{ margin: '0 10px' }}>
                                        {product.quantidade}
                                    </Typography>
                                </Grid>

                                <Grid item xs={2} >
                                    <Typography variant="h6" sx={{ ml: '1.3rem', mt: '.6rem' }}>
                                        Valor: {product.valor}
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Box>

                    ))}
                </Box>
            )}
        </>
    )
}

export default CheckoutProducts;