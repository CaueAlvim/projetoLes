import { useState } from 'react';
import { Box, Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Menu, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import moment from 'moment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProductCardDevolucao from '../components/ProductCardDevolucao';

function UserPedidos() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDevolucaoDialog, setOpenDevolucaoDialog] = useState(false);
    const [openStatusDialog, setOpenStatusDialog] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState({ status: '' });

    const pedidosTable = [
        { numero: '123', usuario: 'NOMEUSUARIO1', status: 'ENCAMINHADO', dataPedido: '2023-12-02' },
        { numero: '456', usuario: 'NOMEUSUARIO2', status: 'AGUARDANDO PAGAMENTO', dataPedido: '2023-12-30' },
        { numero: '789', usuario: 'NOMEUSUARIO3', status: 'FINALIZADO', dataPedido: '2023-12-03' },
    ];

    const product = { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100' };

    const handleOpenDialogDevolucao = () => {
        setOpenDevolucaoDialog(true)
        setOpenMenu(false);
    }

    const handleOpenDialogStatus = () => {
        setOpenStatusDialog(true);
        setOpenMenu(false);
    }

    const handleCloseDialogDevolucao = () => {
        setOpenDevolucaoDialog(false);
    }

    const handleCloseDialogStatus = () => {
        setOpenStatusDialog(false);
    }

    const handleClickMoreOptions = (event, itemSelecinado) => {
        setAnchorEl(event.currentTarget);
        setProdutoSelecionado(itemSelecinado)
        setOpenMenu(true);
    }

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

            <Dialog
                open={openDevolucaoDialog}
                keepMounted
                onClose={handleCloseDialogDevolucao}
                aria-describedby="descricao"
            >
                <DialogTitle>{"Deseja solicitar a troca/devolução deste item?"}</DialogTitle>
                <DialogContent>
                    <Typography variant="body1" sx={{ mt: 3 }}>
                        Dados do pedido
                    </Typography>
                    <Divider variant='fullWidth' sx={{ width: '100%', margin: ' auto', bgcolor: 'black' }} />
                    <ProductCardDevolucao product={product} />
                    <DialogContentText id="descricao" sx={{ mt: 4 }}>
                        Após enviar esta solicitação você receberá um retorno em até 3 dias.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogDevolucao}>Seguir</Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={openStatusDialog}
                keepMounted
                onClose={handleCloseDialogStatus}
                aria-describedby="descricao"
            >
                <DialogTitle>{"Deseja alterar status deste pedido?"}</DialogTitle>
                <DialogContent>
                    <Select
                        id="alterarStatus"
                        value={produtoSelecionado.status}
                        fullWidth
                        onChange={(e) => {
                            setProdutoSelecionado(prevState => ({ ...prevState, status: e.target.value }));
                        }}
                    >
                        <MenuItem value={'ENCAMINHADO'}>ENCAMINHADO</MenuItem>
                        <MenuItem value={'AGUARDANDO PAGAMENTO'}>AGUARDANDO PAGAMENTO</MenuItem>
                        <MenuItem value={'FINALIZADO'}>FINALIZADO</MenuItem>
                    </Select>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialogStatus}>OK</Button>
                </DialogActions>
            </Dialog>

            <Paper elevation={3} sx={{ width: '75%', height: 'auto' }}>
                <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                    Pedidos
                </Typography>

                <Divider variant='fullWidth' sx={{ width: '100%', margin: ' auto', bgcolor: 'black' }} />
                <Container fixed sx={{ mt: 3, mb: 5 }}>
                    <Typography variant="h6">Pesquisar:</Typography>
                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: .3 }}>
                        <Grid item xs={6}>
                            <TextField id="filled-basic" label="Nº Pedido" variant="filled" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="filled-basic" label="Data Inicial" variant="filled" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="filled-basic" label="Data Final" variant="filled" fullWidth />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField id="filled-basic" label="Feito Por" variant="filled" fullWidth />
                        </Grid>
                    </Grid>
                </Container>

                <Divider variant='fullWidth' sx={{ width: '97%', margin: ' auto' }} />

                <Container fixed sx={{ my: 5 }}>
                    <TableContainer component={Paper} sx={{ width: '100%' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                <TableRow>
                                    <TableCell>Nº do pedido</TableCell>
                                    <TableCell align="center">Feito por</TableCell>
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="right">Data do pedido</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {pedidosTable.map((row) => (
                                    <TableRow key={row.numero}>
                                        <TableCell component="th" scope="row">
                                            {row.numero}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {row.usuario}
                                        </TableCell>
                                        <TableCell align="center" component="th" scope="row">
                                            {row.status}
                                        </TableCell>
                                        <TableCell align="right">
                                            {moment(row.dataPedido).format('DD/MM/YYYY')}
                                        </TableCell>
                                        <TableCell align="right">
                                            <Button onClick={(e) => handleClickMoreOptions(e, row)} sx={{ height: '.5rem' }}>
                                                <MoreHorizIcon />
                                            </Button>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={openMenu}
                                                onClose={() => setOpenMenu(false)}
                                            >
                                                <MenuItem onClick={handleOpenDialogStatus}>Alterar Status</MenuItem>
                                                <MenuItem onClick={handleOpenDialogDevolucao}>Solicitar Troca/Devolução</MenuItem>
                                            </Menu>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>

            </Paper>
        </Grid>
    )
}

export default UserPedidos;