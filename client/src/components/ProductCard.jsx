import { useState } from 'react';
import { styled } from '@mui/system';
import { Paper, Typography, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ModalDetalheProduto from './ModalDetalheProduto';

const ProductCardContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
}));

const ProductCard = ({ product }) => {
  const [openModalDetalheProduto, setOpenModalDetalheProduto] = useState(false);

  return (
    <>
      <ProductCardContainer onClick={() => setOpenModalDetalheProduto(true)}>
        <img src={`/capas/${product?.caminhoImagem}`} alt={product?.titulo} style={{ width: '100px', height: '150px', objectFit: 'cover' }} />
        <Typography variant="h6" component="div">
          {product?.titulo}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          R$ {product?.valor}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: '0.5rem' }}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <AddShoppingCartIcon sx={{ mr: '8px' }} />
          ADICIONAR AO CARRINHO
        </Button>
      </ProductCardContainer>

      <ModalDetalheProduto open={openModalDetalheProduto} setOpen={setOpenModalDetalheProduto} product={product} />
    </>
  );
};

export default ProductCard;