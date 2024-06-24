import { Drawer, Grid, Paper, Typography, Button } from "@mui/material";
import { styled } from '@mui/system';
import ResumoCompra from "./ResumoCompra";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import CarrinhoService from "../services/CarrinhoService";

const ProductCardCarrinhoContainer = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderRadius: '10px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
}));

function CarrinhoDrawer({ open, setOpen, products, quantidadeTotal, valorTotal, setCarrinho }) {

    const handleRemoveItem = async (id) => {
        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                await CarrinhoService.removerItemCarrinho({ livroId: id, clienteId: storedUser?.id }).then(
                    async () => setCarrinho(await CarrinhoService.carregarCarrinho(storedUser?.id))
                );
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleAlterarQtd = async (id, boolAumento) => {
        try {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            if (storedUser) {
                await CarrinhoService.alterarQtd({ livroId: id, clienteId: storedUser?.id, aumento: boolAumento }).then(
                    async () => setCarrinho(await CarrinhoService.carregarCarrinho(storedUser?.id))
                );
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
            >
                {products?.length > 0 ? (
                    <Grid container item spacing={2} xs={12} md={12} sx={{ height: 'auto', width: '30rem', marginTop: '1.5rem' }}>
                        <Grid item xs={12} sx={{ height: '55vh', overflow: 'scroll' }}>
                            {products.map((product) => (
                                <Grid item xs={12} key={product?.livroId} sx={{}}>
                                    <ProductCardCarrinhoContainer>
                                        <Grid container sx={{ display: 'flex', flexDirection: 'row' }}>
                                            <Grid item xs={3} >
                                                <img src={`/capas/${product?.caminhoImagem}`} alt={product?.livroNome} style={{ width: '100px', height: '150px', objectFit: 'cover', borderRadius: '7px' }} />
                                            </Grid>

                                            <Grid item xs={7} >
                                                <Grid>
                                                    <Typography variant="h5" sx={{ ml: '1rem' }}>
                                                        {product?.livroNome}
                                                    </Typography>

                                                    <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Button variant="text" color="primary" onClick={() => handleAlterarQtd(product?.livroId, false)}>
                                                            <RemoveIcon />
                                                        </Button>
                                                        <Typography variant="h6" style={{ margin: '0 10px' }}>
                                                            {product?.quantidade}
                                                        </Typography>
                                                        <Button variant="text" color="primary" onClick={() => handleAlterarQtd(product?.livroId, true)}>
                                                            <AddIcon />
                                                        </Button>
                                                    </Grid>

                                                    <Typography variant="h6" sx={{ ml: '1rem', mt: '.6rem' }}>
                                                        Valor: {(product?.valor * product?.quantidade).toFixed(2)}
                                                    </Typography>
                                                </Grid>
                                            </Grid>

                                            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Button variant="outlined" color="primary" onClick={() => handleRemoveItem(product?.livroId)} style={{ marginTop: '0.5rem' }}>
                                                    <DeleteIcon />
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </ProductCardCarrinhoContainer>
                                </Grid>
                            ))}
                        </Grid>

                        <Grid item xs={12} sx={{ m: '.5rem', height: '40vh' }}>
                            <Paper elevation={5}>
                                <ResumoCompra
                                    isCheckout={false}
                                    quantidadeProdutos={quantidadeTotal}
                                    valorTotal={valorTotal}
                                    valorFrete={30}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                ) : (
                    <Grid sx={{ height: '100vh', width: '30rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ ml: 2.25 }}>
                            Carrinho vazio <RemoveShoppingCartIcon />
                        </Typography>
                    </Grid>
                )}
            </Drawer>
        </>
    )
}

export default CarrinhoDrawer;