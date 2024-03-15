import { Box, Button, TextField, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function ResumoCompra({ isCheckout, quantidadeProdutos, valorTotal, valorFrete }) {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto', bgcolor: 'white', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Box sx={{ borderBottom: '1px solid #000', paddingBottom: '10px', width: '100%' }}>
                <Typography variant="h4" sx={{ ml: 1.8, mt: 1.8 }}>
                    Resumo da compra
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                <Typography variant="h6" sx={{ ml: 1.1 }}>
                    Quantidade de produtos
                </Typography>
                <Typography variant="h6" sx={{ mr: 1.5 }}>
                    {quantidadeProdutos}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                <Typography variant="h6" sx={{ ml: 1.1 }}>
                    Valor total
                </Typography>
                <Typography variant="h6" sx={{ mr: 1.5 }}>
                    R$ {valorTotal}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                <Typography variant="h6" sx={{ ml: 1.1 }}>
                    Total c/ frete
                </Typography>
                <Typography variant="h6" sx={{ mr: 1.5 }}>
                    R$ {valorTotal + valorFrete}
                </Typography>
            </Box>

            {isCheckout && (
                <Box sx={{ ml: '1.25rem', width: 'auto', display: 'flex', alignItems: 'center', gap: 1, flexDirection: 'row', mt: '1rem' }}>
                    <Typography variant="h6">
                        Cupom de troca:
                    </Typography>


                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <TextField size="small" variant="outlined" sx={{ width: '75%' }} />
                        <Button variant="contained" color="primary" size="small">
                            OK
                        </Button>
                    </Box>
                </Box>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1.5rem', mb: '1rem' }}>
                {isCheckout ? (
                    <Button variant="contained" color="primary" sx={{ height: '3.7rem', width: '90%', fontSize: '.9rem' }}>
                        Finalizar Compra
                    </Button>
                )
                    :
                    <Button variant="contained" color="primary" onClick={() => navigate('/checkout')} sx={{ height: '3.7rem', width: '90%', fontSize: '.9rem' }}>
                        Fazer Checkout
                    </Button>
                }
            </Box>
        </Box>
    )
}

export default ResumoCompra;