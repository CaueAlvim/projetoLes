import { useNavigate } from 'react-router-dom';
import { Box, Button, Divider, TextField, Typography } from "@mui/material";

function ResumoCompra({ isCheckout, quantidadeProdutos, valorTotal, valorFrete, handleFinalizarCompra, cupom, setCupom, validarCupom }) {
    const navigate = useNavigate();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: 'auto', bgcolor: 'white', borderRadius: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <Box sx={{ borderBottom: '1px solid #000', paddingBottom: '10px', width: '100%' }}>
                <Typography variant={isCheckout ? "h4" : "h5"} sx={{ ml: 1.8, mt: 1.8 }}>
                    {isCheckout ? 'Finalização' : 'Resumo da compra'}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: isCheckout ? 2 : 1, mt: 2 }}>
                <Typography variant={isCheckout ? "h6" : "body1"} sx={{ ml: 2.25 }}>
                    Quantidade de produtos
                </Typography>
                <Typography variant={isCheckout ? "h6" : "body1"} sx={{ mr: 2.25 }}>
                    {quantidadeProdutos}
                </Typography>
            </Box>

            <Divider sx={{ borderTop: '1px solid #e5e5e5', width: '95%', margin: ' auto' }} />


            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, mt: 2 }}>
                <Typography variant={isCheckout ? "h6" : "body1"} sx={{ ml: 2.25 }}>
                    Valor total
                </Typography>
                <Typography variant={isCheckout ? "h6" : "body1"} sx={{ mr: 2.25 }}>
                    R$ {valorTotal && (valorTotal).toFixed(2)}
                </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant={isCheckout ? "h6" : "body1"} sx={{ ml: 2.25 }}>
                    Total c/ frete
                </Typography>
                <Typography variant={isCheckout ? "h6" : "body1"} sx={{ mr: 2.25 }}>
                    R$ {valorTotal && valorFrete && (valorTotal + valorFrete).toFixed(2)}
                </Typography>
            </Box>

            <Divider sx={{ borderTop: '1px solid #e5e5e5', width: '95%', margin: ' auto' }} />

            <Box sx={{ ml: '1.25rem', width: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'row', my: isCheckout ? 2 : 2 }}>
                <Typography variant={isCheckout ? "h6" : "body1"}>
                    Calcule o frete:
                </Typography>


                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: '1rem', width: '100%', mt: .5 }}>
                    <TextField
                        size="small"
                        variant="outlined"
                        sx={{ width: '90%' }} />

                    <Button variant="contained" color="primary" size="small" >
                        OK
                    </Button>
                </Box>
            </Box>

            {isCheckout && (
                <>
                    <Divider sx={{ borderTop: '1px solid #e5e5e5', width: '95%', margin: ' auto' }} />

                    <Box sx={{ ml: '1.25rem', width: 'auto', display: 'flex', alignItems: 'center', flexDirection: 'row', my: isCheckout ? 2 : 2 }}>
                        <Typography variant="h6">
                            Utilizar Cupom:
                        </Typography>


                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: '1rem', width: '100%', mt: .5 }}>
                            <TextField
                                id='cypress-checkout-cupom-field'
                                size="small"
                                variant="outlined"
                                sx={{ width: '90%' }}
                                value={cupom}
                                onChange={(event) => setCupom(event.target.value)} />
                            <Button id='cypress-checkout-cupom-ok-button' onClick={validarCupom} variant="contained" color="primary" size="small" >
                                OK
                            </Button>
                        </Box>
                    </Box>
                </>
            )}

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: .9, mb: '1rem' }}>
                <Button variant="contained" color="primary"
                    onClick={() => isCheckout ? handleFinalizarCompra() : navigate('/checkout')}
                    sx={{ height: '3.7rem', width: '90%', fontSize: '.9rem' }}>
                    {isCheckout ? 'Finalizar Compra' : 'Ir para checkout'}
                </Button>
            </Box>
        </Box>
    )
}

export default ResumoCompra;