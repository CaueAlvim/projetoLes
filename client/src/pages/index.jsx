import AppBarSearch from '../components/AppBarSearch';
import Carousel from '../components/Carousel'
import { Grid } from '@mui/material'
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import LivroService from '../services/LivroService';

function Index() {
  const [listaLivros, setListaLivros] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#22272e');

  useEffect(() => {
    fetchLivros();
  }, []);

  const fetchLivros = async () => {
    const lista = await LivroService.searchAll();
    setListaLivros(lista);
  }

  return (
    <>
      <Grid sx={{ overflow: 'hidden' }}>
        <AppBarSearch />

        <Grid container sx={{ overflow: 'scroll', display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 4.2rem)', backgroundColor: backgroundColor, alignItems: 'center' }}>
          <Carousel setBgColor={setBackgroundColor} />

          <Grid container item xs={12} sx={{ backgroundColor: '#f1f1f1', height: 'auto', width: '80vw', borderRadius: '10px', marginBottom: '1.5rem' }}>
            {listaLivros?.map((livro) => (
              <Grid item xs={4} key={livro.id}>
                <ProductCard product={livro} />
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