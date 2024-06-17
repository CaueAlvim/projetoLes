import AppBarSearch from '../components/AppBarSearch';
import Carousel from '../components/Carousel'
import { Box, Grid, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import LivroService from '../services/LivroService';

function Index() {
  const [listaLivros, setListaLivros] = useState([]);
  const [listaRecomendacao, setListaRecomendacao] = useState([]);
  const [carrinho, setCarrinho] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#22272e');

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      storedUser && setListaRecomendacao(LivroService.recomendar(storedUser?.id));

      const lista = await LivroService.searchAll();
      setListaLivros(lista);
    } catch (error) {
      console.error(error);
    }
  }
console.log(listaRecomendacao);
  return (
    <>
      <Grid sx={{ overflow: 'hidden' }}>
        <AppBarSearch carrinho={carrinho} setCarrinho={setCarrinho} />

        <Grid container sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: backgroundColor, alignItems: 'center' }}>
          <Carousel setBgColor={setBackgroundColor} />

          {listaRecomendacao.length > 0 && (
            <Grid container item xs={12} sx={{ backgroundColor: '#efc084', height: 'auto', width: '90vw', borderRadius: '10px', marginBottom: '.5rem', display: 'flex', flexWrap: 'initial', flexDirection: 'column', overflowX: 'auto' }}>
              <Typography variant="h4" sx={{ ml: 2, mt: 1, position: 'absolute', color: 'white' }}>
                Recomendações
              </Typography>
              <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', mt: '2.7rem', justifyContent: 'center' }}>
                {listaLivros?.map((livro) => (
                  <Box id='cypress-recommended-item' key={livro.id}>
                    <ProductCard product={livro} setCarrinho={setCarrinho} />
                  </Box>
                ))}
              </Grid>
            </Grid>
          )}

          <Grid container item xs={12} sx={{ backgroundColor: '#f1f1f1', height: 'auto', width: '80vw', borderRadius: '10px', marginBottom: '1.5rem' }}>
            {listaLivros?.map((livro) => (
              <Grid item xs={4} id='cypress-item-card-index' key={livro.id}>
                <ProductCard product={livro} setCarrinho={setCarrinho} />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Footer />
      </Grid>
    </>
  )
}

export default Index