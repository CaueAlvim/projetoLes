import AppBarSearch from '../components/AppBarSearch';
import Carousel from '../components/Carousel'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import LivroService from '../services/LivroService';
import ChatBot from '../components/ChatBot';

function Index() {
  const [listaLivros, setListaLivros] = useState([]);
  const [carrinho, setCarrinho] = useState({});
  const [backgroundColor, setBackgroundColor] = useState('#22272e');

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    try {
      const lista = await LivroService.searchAll();
      setListaLivros(lista);
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

          <Grid container item xs={12} sx={{ backgroundColor: '#f1f1f1', height: 'auto', width: '80vw', borderRadius: '10px', marginBottom: '1.5rem' }}>
            {listaLivros?.map((livro) => (
              <Grid item xs={4} id='cypress-item-card-index' key={livro.id}>
                <ProductCard product={livro} setCarrinho={setCarrinho} />
              </Grid>
            ))}
          </Grid>

          <ChatBot />

        </Grid>

        <Footer />
      </Grid >
    </>
  )
}

export default Index