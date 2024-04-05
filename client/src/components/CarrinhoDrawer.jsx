import { Box, Drawer, Grid, Paper, Typography } from "@mui/material";
import ProductCardCarrinho from "./ProductCardCarrinho";
import ResumoCompra from "./ResumoCompra";
import { useEffect, useState } from "react";
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function CarrinhoDrawer({ open, setOpen }) {
    const [valorTotal, setValorTotal] = useState();

    useEffect(() => {
        fetchProdutos();
        calcularTotais();
    }, []);

    // useEffect(() => {
    //     calcularTotais();
    // }, [products.length]);

    const fetchProdutos = () => {
        console.log('placeholder func');
    }

    const products = [
        { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1 },
        { id: 2, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1 },
        { id: 3, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1 },
        { id: 4, name: 'Livro 4', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1 },
        { id: 5, name: 'Livro 5', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1 },
        { id: 6, name: 'Livro 6', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1 },
        { id: 7, name: 'Livro 7', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1 },
        { id: 8, name: 'Livro 8', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1 },
        { id: 9, name: 'Livro 9', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1 },
    ];

    const calcularTotais = () => {
        setValorTotal(products?.reduce((somador, produto) => somador + parseFloat(produto.price?.replace('R$', '')), 0)); //,0 valor inicial do somador
    }

    return (
        <>
            <Drawer
                anchor={'right'}
                open={open}
                onClose={() => setOpen(false)}
            >
                {products.length > 0 ? (
                    <Grid container item spacing={2} xs={12} md={12} sx={{ height: 'auto', width: '28vw', marginTop: '1.5rem' }}>
                        <Grid item xs={12} sx={{ height: '63vh', overflow: 'scroll' }}>
                            {products.map((product) => (
                                <Grid item xs={12} key={product.id} sx={{}}>
                                    <ProductCardCarrinho product={product} />
                                </Grid>
                            ))}
                        </Grid>

                        <Grid item xs={12} sx={{ m: '.5rem' }}>
                            <Paper elevation={5}>
                                <ResumoCompra
                                    isCheckout={false}
                                    quantidadeProdutos={products.length}
                                    valorTotal={valorTotal}
                                    valorFrete={30}
                                />
                            </Paper>
                        </Grid>
                    </Grid>
                ) : (
                    <Box sx={{ height: '100vh', width: '28vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant="h6" sx={{ ml: 2.25 }}>
                            Carrinho vazio <RemoveShoppingCartIcon/>
                        </Typography>
                    </Box>
                )}
            </Drawer>
        </>
    )
}

export default CarrinhoDrawer;