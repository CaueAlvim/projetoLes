import AppBarSearch from '../components/AppBarSearch';
import Carousel from '../components/Carousel'
import { Grid } from '@mui/material'
import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

function Index() {
  const [carrinho, setCarrinho] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);
  const [backgroundColor, setBackgroundColor] = useState('#22272e');

  const products = [
    { id: 1, nome: 'Livro 1', imagem: 'https://via.placeholder.com/100', preco: 'R$100', descricao: 'Descricao Teste 1' },
    { id: 2, nome: 'Livro 2', imagem: 'https://via.placeholder.com/100', preco: 'R$200', descricao: 'Descricao Teste 2' },
    { id: 3, nome: 'Livro 3', imagem: 'https://via.placeholder.com/100', preco: 'R$300', descricao: 'Descricao Teste 3'  },
    { id: 4, nome: 'Livro 4', imagem: 'https://via.placeholder.com/100', preco: 'R$400', descricao: 'Descricao Teste 4'  },
    { id: 5, nome: 'Livro 5', imagem: 'https://via.placeholder.com/100', preco: 'R$500', descricao: 'Descricao Teste 5'  },
    { id: 6, nome: 'Livro 6', imagem: 'https://via.placeholder.com/100', preco: 'R$600', descricao: 'Descricao Teste 6'  },
    { id: 7, nome: 'Livro 7', imagem: 'https://via.placeholder.com/100', preco: 'R$700', descricao: 'Descricao Teste 7'  },
    { id: 8, nome: 'Livro 8', imagem: 'https://via.placeholder.com/100', preco: 'R$800', descricao: 'Descricao Teste 8'  },
    { id: 9, nome: 'Livro 9', imagem: 'https://via.placeholder.com/100', preco: 'R$900', descricao: 'Descricao Teste 9'  },
    { id: 10, nome: 'Livro 10', imagem: 'https://via.placeholder.com/100', preco: 'R$1000', descricao: 'Descricao Teste 10' },
    { id: 11, nome: 'Livro 11', imagem: 'https://via.placeholder.com/100', preco: 'R$2000', descricao: 'Descricao Teste 11' },
    { id: 12, nome: 'Livro 12', imagem: 'https://via.placeholder.com/100', preco: 'R$3000', descricao: 'Descricao Teste 12' },
  ];

  return (
    <>
      <Grid sx={{ overflow: 'hidden' }}>
        <AppBarSearch cart={carrinho} setCart={setCarrinho}/>

        <Grid container sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: backgroundColor, alignItems: 'center' }}>
          <Carousel setBgColor={setBackgroundColor} />

          <Grid container item xs={12} sx={{backgroundColor: '#f1f1f1', height: 'auto', width: '80vw', borderRadius: '10px', marginBottom: '1.5rem' }}>
            {products.map((product) => (
              <Grid item xs={4} key={product.id}>
                <ProductCard product={product} carrinho={carrinho} setCarrinho={setCarrinho}/>
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Footer/>
      </Grid>
    </>
  )
}

export default Index