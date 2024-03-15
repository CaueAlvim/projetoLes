import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import AppBarSearch from '../components/AppBarSearch';
import Footer from '../components/Footer';
import ProductCardCarrinho from '../components/ProductCardCarrinho';
import ResumoCompra from '../components/ResumoCompra';

function Carrinho() {
    const [valorTotal, setValorTotal] = useState();
    const [valorFrete, setValorFrete] = useState();

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
        { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1  },
        { id: 2, name: 'Livro 2', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1  },
        { id: 3, name: 'Livro 3', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1  },
        { id: 4, name: 'Livro 4', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1  },
        { id: 5, name: 'Livro 5', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1  },
        { id: 6, name: 'Livro 6', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1  },
        { id: 7, name: 'Livro 7', image: 'https://via.placeholder.com/100', price: 'R$100', quantity: 1  },
        { id: 8, name: 'Livro 8', image: 'https://via.placeholder.com/100', price: 'R$200', quantity: 1  },
        { id: 9, name: 'Livro 9', image: 'https://via.placeholder.com/100', price: 'R$300', quantity: 1  },
    ];

    const calcularTotais = () => {
        setValorTotal(products?.reduce((somador, produto) => somador + parseFloat(produto.price?.replace('R$', '')), 0)); //,0 valor inicial do somador
    }

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
                            <ResumoCompra
                                isCheckout={false}
                                quantidadeProdutos={products.length}
                                valorTotal={valorTotal}
                                valorFrete={30}
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Footer />
            </Grid>
        </>
    );
}


export default Carrinho;