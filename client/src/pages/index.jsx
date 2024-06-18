import AppBarSearch from '../components/AppBarSearch';
import Carousel from '../components/Carousel'
import { Box, CircularProgress, Grid, Tooltip, Typography } from '@mui/material'
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import LivroService from '../services/LivroService';

function Index() {
  const [user, setUser] = useState(undefined);
  const [listaLivros, setListaLivros] = useState([]);
  const [listaRecomendacao, setListaRecomendacao] = useState([]);
  const [carrinho, setCarrinho] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#22272e');

  useEffect(() => {
    fetchLocalStorage();
    fetchLivros();
    fetchRecomendacoes();
  }, []);

  const fetchLocalStorage = async () => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }

  const fetchLivros = async () => {
    try {
      user && setListaRecomendacao(LivroService.recomendar(user?.id));
      const lista = await LivroService.searchAll();
      setListaLivros(lista);
    } catch (error) {
      console.error(error);
    }
  }

  const fetchRecomendacoes = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      let listaRecomendacoes = [];
      if (storedUser) {
        listaRecomendacoes = await LivroService.recomendar(storedUser?.id);
      }
      setListaRecomendacao(listaRecomendacoes);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Grid sx={{ overflow: 'hidden' }}>
        <AppBarSearch carrinho={carrinho} setCarrinho={setCarrinho} />

        <Grid container sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: backgroundColor, alignItems: 'center' }}>
          <Carousel setBgColor={setBackgroundColor} />

          {user?.temCompras && (
            <Grid container item xs={12} sx={{ backgroundColor: '#f1f1f1', height: 'auto', width: '90vw', borderRadius: '10px', marginBottom: '.5rem', display: 'flex', flexWrap: 'initial', flexDirection: 'column', overflowX: 'auto' }}>
              {listaRecomendacao.length > 0 ? (
                <>
                  <Typography variant="h4" sx={{ ml: 2, mt: 1, position: 'absolute', color: 'black' }}>
                    Recomendações
                  </Typography>
                  <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'row', mt: '2.7rem', justifyContent: 'center' }}>
                    {listaRecomendacao?.map((livro) => (
                      <Tooltip title={livro?.motivoRecomendacao} key={livro.id} sx={{ fontSize: '1rem' }}>
                        <Box id='cypress-recommended-item'>
                          <ProductCard product={livro} setCarrinho={setCarrinho} />
                        </Box>
                      </Tooltip>
                    ))}
                  </Grid>
                </>
              )
                :
                (
                  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: '1rem' }}>
                    <CircularProgress />
                  </Box>
                )}
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
      </Grid >
    </>
  )
}

export default Index