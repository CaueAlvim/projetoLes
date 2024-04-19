import { useState } from 'react';
import { styled } from '@mui/system';
import { Paper, Typography, Button } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ModalDetalheProduto from './ModalDetalheProduto';
import CarrinhoService from '../services/CarrinhoService';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

function ProductCard({ product, setCarrinho }) {
  const [openModalDetalheProduto, setOpenModalDetalheProduto] = useState(false);

  const handleAddCart = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) {
        const response = await CarrinhoService.adicionarItemCarrinho({ livroId: product?.id, clienteId: storedUser?.id }).then(
          async () => setCarrinho(await CarrinhoService.carregarCarrinho(storedUser?.id))
        );
        toast.success("Item adicionado com sucesso!", { 
          toastId: 'item-add-cart-success',
          autoClose: 1500,
          position: toast.POSITION.BOTTOM_LEFT
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

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
            handleAddCart();
            event.stopPropagation();
          }}
        >
          <AddShoppingCartIcon sx={{ mr: '8px' }} />
          ADICIONAR AO CARRINHO
        </Button>
      </ProductCardContainer>

      <ModalDetalheProduto open={openModalDetalheProduto} setOpen={setOpenModalDetalheProduto} product={product} handleAddCart={handleAddCart} />
    </>
  );
};

export default ProductCard;