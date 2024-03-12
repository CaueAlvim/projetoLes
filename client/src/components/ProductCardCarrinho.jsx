import { Paper, Typography, Button, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const ProductCardCarrinhoContainer = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2),
  margin: theme.spacing(1),
  borderRadius: '10px',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
}));


const ProductCardCarrinho = ({ product }) => {

  return (
    <ProductCardCarrinhoContainer>
      <Grid container>
        <Grid item xs={2}>
          <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </Grid>
        <Grid item xs={10} sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5">
            {product.name}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '1rem' }}>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button variant="text" color="primary" onClick={() => 1}>
                <RemoveIcon />
              </Button>
              <Typography variant="h6" style={{ margin: '0 10px' }}>
                {product.quantity}
              </Typography>
              <Button variant="text" color="primary" onClick={() => 1}>
                <AddIcon />
              </Button>
            </Box>

            <Typography variant="h6" sx={{ ml: '1.3rem', mt: '.6rem' }}>
              Valor: {product.price}
            </Typography>
          </Box>

          <Button variant="outlined" color="primary" style={{ marginTop: '0.5rem' }}>
            <DeleteIcon />
          </Button>
        </Grid>
      </Grid>
    </ProductCardCarrinhoContainer>
  );
};

export default ProductCardCarrinho;
