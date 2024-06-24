import { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Table, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, TableBody } from "@mui/material";

function ModalFinalizacaoPagamento({ open, setOpen, valorTotalItens, cartoesUsados, setCartoesUsados, valorFrete, listaCupons, cupomDesconto, handleFinalizarCompra }) {
    const [fieldsError, setFieldsError] = useState(undefined);

    const handleClose = () => {
        setOpen(false);
    }

    const handleChangeCardsValue = (id, value) => {
        setCartoesUsados(cartoesUsados.map(cartao =>
            cartao.cardFieldId === id ? { ...cartao, cartaoValor: value } : cartao));
    }
    console.log(cartoesUsados);
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                PaperProps={{
                    component: 'form',
                    onSubmit: () => {
                        setOpen(false);
                    },
                }}
            >

                <DialogTitle sx={{ borderBottom: '1px solid #000' }}>
                    Pagamento
                </DialogTitle>
                <DialogContent>
                    <Grid sx={{ width: '34rem' }}>
                        <Grid container sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 4, width: '100%' }}>

                            {(cartoesUsados.length > 1 || cartoesUsados[0].cartaoInfo !== null) && (
                                <>
                                    <Grid item xs={12}>
                                        <Typography variant={"h6"} sx={{ ml: 1 }}>
                                            Cartões selecionados:
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12} >
                                        <TableContainer sx={{ maxHeight: '20rem' }}>
                                            <Table size="small">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell />
                                                        <TableCell align="right">Valor a pagar com este cartão</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {cartoesUsados.map((cartao) => (
                                                        <TableRow
                                                            key={cartao?.cardFieldId}
                                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                        >
                                                            <TableCell component="th" scope="row">
                                                                {cartao?.cartaoInfo}
                                                            </TableCell>
                                                            <TableCell align="right">
                                                                <TextField
                                                                    autoFocus
                                                                    id={`cypress-finalizar-pagamento-modal-${cartao?.cardFieldId}`}
                                                                    value={cartao?.cartaoValor}
                                                                    onChange={(event) => handleChangeCardsValue(cartao.cardFieldId, event.target.value)}
                                                                    InputProps={{
                                                                        startAdornment: 'R$',
                                                                        inputProps: {
                                                                            style: { textAlign: 'right' },
                                                                        },
                                                                    }}
                                                                />
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </Grid>
                                </>
                            )}
                        </Grid>

                        {listaCupons.length > 0 && (
                            <Grid container sx={{ display: 'flex', alignItems: 'center', mb: 3, mt: 4, width: '100%', borderBottom: '2px solid #e5e5e5' }}>
                                <Grid item xs={12}>
                                    <Typography variant={"h6"} sx={{ ml: 1 }}>
                                        Cupons de troca utilizados:
                                    </Typography>
                                </Grid>

                                <Grid item xs={12}>
                                    <TableContainer sx={{ maxHeight: '15rem' }}>
                                        <Table size="small">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell />
                                                    <TableCell align="right">Valor</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {listaCupons.map((cupom) => (
                                                    <TableRow
                                                        key={cupom?.cupomId}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {cupom?.codigoCupom}
                                                        </TableCell>
                                                        <TableCell align="right">
                                                            R${(cupom?.valor).toFixed(2)}
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        )}

                        {listaCupons?.length > 0 && (
                            <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 5, width: '100%' }}>
                                <Typography variant={"body1"} sx={{ ml: 1 }}>
                                    Desconto dos cupons de troca:
                                </Typography>
                                <Typography variant={"body1"} sx={{ mr: 1 }}>
                                    R${(listaCupons?.reduce((total, cupom) => total + cupom.valor, 0)).toFixed(2)}
                                </Typography>
                            </Grid>
                        )}

                        {cupomDesconto && (
                            <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, width: '100%' }}>
                                <Typography variant={"body1"} sx={{ ml: 1 }}>
                                    Desconto do cupom promocional:
                                </Typography>
                                <Typography variant={"body1"} sx={{ mr: 1 }}>
                                    {cupomDesconto.valor * 100}%
                                </Typography>
                            </Grid>
                        )}

                        <Grid sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1, width: '100%' }}>
                            <Typography variant={"h6"} sx={{ ml: 1 }}>
                                Valor a ser pago:
                            </Typography>
                            <Typography variant={"h6"} sx={{ mr: 1 }}>
                                R${Math.max(
                                    ((valorTotalItens + valorFrete - (listaCupons?.reduce((total, cupom) => total + cupom.valor, 0) || 0)) - (valorTotalItens * (cupomDesconto?.valor || 0))),
                                    0
                                ).toFixed(2)}
                            </Typography>
                        </Grid>
                    </Grid>
                    {fieldsError && (
                        <Typography color="red" variant="subtitle">
                            {fieldsError}
                        </Typography>
                    )}
                </DialogContent>
                <DialogActions>
                    <Grid container>
                        <Grid item xs={7}>
                            <Button onClick={handleClose}>Cancelar</Button>
                        </Grid>

                        <Grid item xs={5} sx={{ display: 'flex', justifyContent: 'flex-end' }}>

                            <Button id="cypress-modal-finalizar-compra" onClick={handleFinalizarCompra}>Finalizar Compra</Button>
                        </Grid>
                    </Grid>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalFinalizacaoPagamento;