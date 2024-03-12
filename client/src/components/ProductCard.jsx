import { Paper, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  return (
    <ProductCardContainer>
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      <Typography variant="h6" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.price}
      </Typography>
      <Button variant="contained" color="primary" style={{ marginTop: '0.5rem' }} onClick={() => navigate(`/detalhes-produto/${product.id}`)}>
        COMPRAR
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;