import { useEffect, useState } from 'react';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogTitle, Divider, Grid, Menu, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, FormControl, InputLabel, Box, Checkbox } from '@mui/material';
import moment from 'moment';
import PedidoVendaService from '../services/PedidoVendaService';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalSolicitarTroca from '../components/ModalSolicitarTroca';

function UserPedidos({ isAdmin }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [openDevolucaoDialog, setOpenDevolucaoDialog] = useState(false);
    const [openStatusDialog, setOpenStatusDialog] = useState(false);
    const [pedidoSelecionado, setPedidoSelecionado] = useState();
    const [alterarStatus, setAlterarStatus] = useState({ pedidoId: 0, status: '' });
    const [filter, setFilter] = useState({ numPedido: '', feitoPor: '', dataInicial: '2024-01-01', dataFinal: moment().format('YYYY-MM-DD') });
    const [listaPedidos, setListaPedidos] = useState([]);
    const [listaItensPedido, setListaItensPedido] = useState([]);

    useEffect(() => {
        handlePesquisar();
    }, []);

    const handleOpenDialogDevolucao = (pedido) => {
        setOpenDevolucaoDialog(true);
        setListaItensPedido(pedido?.itens);
        setPedidoSelecionado(pedido);
        setOpenMenu(false);
    }

    const handleOpenDialogStatus = (pedido) => {
        setOpenStatusDialog(true);
        setPedidoSelecionado(pedido);
        setOpenMenu(false);
    }

    const handleCloseDialogStatus = () => {
        setOpenStatusDialog(false);
    }

    const handlePesquisar = async () => {
        try {
            const lista = await PedidoVendaService.search(filter);
            setListaPedidos(lista);
        } catch (error) {
            console.error(error)
        }
    }

    const handleAlterarStatus = async () => {
        try {
            await PedidoVendaService.alterarStatus(pedidoSelecionado?.id, alterarStatus?.status);
            toast.success("Status do pedido alterado com sucesso!", {
                toastId: 'status-pedido-alterar-success',
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_LEFT
            });
            handlePesquisar();
            handleCloseDialogStatus();
        } catch (error) {
            console.error(error)
        }
    }

    const handleCancelarPedido = async (pedido) => {
        try {
            await PedidoVendaService.cancelarPedido(pedido?.id);
            toast.success("Pedido cancelado com sucesso!", {
                toastId: 'pedido-cancelar-success',
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_LEFT
            });
            handlePesquisar();
            handleCloseDialogStatus();
        } catch (error) {
            toast.error(error.toString(), {
                toastId: 'pedido-cancelar-error',
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }}>

            <ModalSolicitarTroca
                open={openDevolucaoDialog}
                setOpen={() => setOpenDevolucaoDialog(false)}
                listaItensPedido={listaItensPedido}
                pedidoSelecionadoId={pedidoSelecionado?.id}
            />

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
                        value={alterarStatus.status}
                        fullWidth
                        onChange={(e) => {
                            setAlterarStatus(prevState => ({ ...prevState, status: e.target.value }));
                        }}
                    >
                        <MenuItem value={'APROVADO'}>APROVADO</MenuItem>
                        <MenuItem value={'REPROVADO'}>REPROVADO</MenuItem>
                        <MenuItem value={'EM TRANSPORTE'}>EM TRANSPORTE</MenuItem>
                        <MenuItem value={'ENTREGUE'}>ENTREGUE</MenuItem>
                        <MenuItem value={'EM TROCA'}>EM TROCA</MenuItem>
                        <MenuItem value={'TROCADO'}>TROCADO</MenuItem>
                        <MenuItem value={'PEDIDO CANCELADO'}>PEDIDO CANCELADO</MenuItem>
                    </Select>

                </DialogContent>
                <DialogActions>
                    <Button id='cypress-modal-status-pedido-venda-ok' onClick={handleAlterarStatus}>OK</Button>
                </DialogActions>
            </Dialog>

            <Paper elevation={3} sx={{ width: '75%', height: 'auto' }}>
                <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                    Pedidos
                </Typography>

                <Divider variant='fullWidth' sx={{ width: '100%', margin: ' auto', bgcolor: 'black' }} />
                {isAdmin && (
                    <>
                        <Container fixed sx={{ mt: 3, mb: 5 }}>
                            <Typography variant="h6">Pesquisar:</Typography>
                            <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: .3 }}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="filter-admpedidos-npedido"
                                        label="Nº Pedido"
                                        variant="filled"
                                        fullWidth
                                        value={filter.numPedido}
                                        onChange={(event) => setFilter({ ...filter, numPedido: event.target.value })} />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        id="filter-admpedidos-datainicial"
                                        label="Data Inicial"
                                        type='date'
                                        variant="filled"
                                        fullWidth
                                        value={filter.dataInicial}
                                        onChange={(event) => setFilter({ ...filter, dataInicial: event.target.value })} />
                                </Grid>
                                <Grid item xs={3}>
                                    <TextField
                                        id="filter-admpedidos-datafinal"
                                        label="Data Final"
                                        type='date'
                                        variant="filled"
                                        fullWidth
                                        value={filter.dataFinal}
                                        onChange={(event) => setFilter({ ...filter, dataFinal: event.target.value })} />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="filter-admpedidos-feitopor"
                                        label="Feito Por"
                                        variant="filled"
                                        fullWidth
                                        value={filter.feitoPor}
                                        onChange={(event) => setFilter({ ...filter, feitoPor: event.target.value })} />
                                </Grid>
                            </Grid>
                        </Container>

                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                            <Button id='cypress-pedidosearch' onClick={handlePesquisar} sx={{ mb: 2, mr: 5 }}> Pesquisar</Button>
                        </Box>

                        <Divider variant='fullWidth' sx={{ width: '97%', margin: ' auto' }} />
                    </>
                )}

                <Divider variant='fullWidth' sx={{ width: '97%', margin: ' auto' }} />

                <Container fixed sx={{ my: 5 }}>
                    <TableContainer component={Paper} sx={{ width: '100%' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                <TableRow>
                                    <TableCell>Nº do pedido</TableCell>
                                    {isAdmin && (<TableCell align="center">Feito por</TableCell>)}
                                    <TableCell align="center">Status</TableCell>
                                    <TableCell align="right">Valor pedido</TableCell>
                                    <TableCell align="right">Data do pedido</TableCell>
                                    <TableCell align="right" />
                                    <TableCell align="right" />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listaPedidos.map((pedido) => (
                                    <TableRow key={pedido?.id}>
                                        <TableCell component="th" scope="row">
                                            {pedido?.id}
                                        </TableCell>
                                        {isAdmin && (
                                            <TableCell align="center" component="th" scope="row">
                                                {pedido?.feitoPor}
                                            </TableCell>
                                        )}
                                        <TableCell align="center" component="th" scope="row">
                                            {pedido?.status}
                                        </TableCell>
                                        <TableCell align="right">
                                            R${(pedido?.valorPedido).toFixed(2)}
                                        </TableCell>
                                        <TableCell align="right">
                                            {moment(pedido?.dataPedido).format('DD/MM/YYYY')}
                                        </TableCell>
                                        <TableCell align="right">
                                        {!isAdmin && (
                                            <Button id={`cypress-user-solicitar-troca-${pedido?.id}`} onClick={() => handleOpenDialogDevolucao(pedido)} variant='outlined'>
                                                Troca
                                            </Button>
                                        )}
                                        </TableCell>

                                        <TableCell align="right">
                                            {isAdmin && (
                                                <Button id={`cypress-adm-alterar-status-pedido-${pedido?.id}`} variant='outlined' onClick={() => handleOpenDialogStatus(pedido)}>
                                                    Alterar Status
                                                </Button>
                                            )}
                                            {!isAdmin && (
                                                <Button id={`cypress-cancelar-pedido-${pedido?.id}`} variant='outlined' onClick={() => handleCancelarPedido(pedido)}>
                                                    Cancelar
                                                </Button>
                                            )}
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