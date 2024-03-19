import { Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const ProductCardContainerDevolucao = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  borderRadius: '10px',
}));

const ProductCardDevolucao = ({ product }) => {

  return (
    <ProductCardContainerDevolucao >
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <Typography variant="h6" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.price}
      </Typography>
    </ProductCardContainerDevolucao>
  );
};

export default ProductCardDevolucao;