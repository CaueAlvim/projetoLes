import { useEffect, useState } from 'react';
import { Button, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Menu, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, FormControl, InputLabel, Box } from '@mui/material';
import moment from 'moment';
import PedidoVendaService from '../services/PedidoVendaService';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ProductCardDevolucao from '../components/ProductCardDevolucao';

function UserPedidos({ isAdmin }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const [openDevolucaoDialog, setOpenDevolucaoDialog] = useState(false);
    const [openStatusDialog, setOpenStatusDialog] = useState(false);
    const [pedidoSelecionado, setPedidoSelecionado] = useState({ status: '' });
    const [selectTrocaDevolucao, setSelectTrocaDevolucao] = useState({ operacao: 'Troca' });
    const [filter, setFilter] = useState({ numPedido: '', feitoPor: '', dataInicial: '2024-01-01', dataFinal: moment().format('YYYY-MM-DD') });
    const [listaPedidos, setListaPedidos] = useState([]);

    const product = { id: 1, name: 'Livro 1', image: 'https://via.placeholder.com/100', price: 'R$100' };

    useEffect(() => {
        handlePesquisar();
    }, []);

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
        setPedidoSelecionado(itemSelecinado)
        setOpenMenu(true);
    }

    const handlePesquisar = async () => {
        try {
            const lista = await PedidoVendaService.search(filter);
            setListaPedidos(lista);
        } catch (error) {
            console.error(error)
        }
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
                    <FormControl variant="standard" fullWidth sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="label-troca-devolucao">Operação</InputLabel>
                        <Select
                            labelId="label-troca-devolucao"
                            id="operacao-troca-devolucao"
                            value={selectTrocaDevolucao.operacao}
                            onChange={(event) => setSelectTrocaDevolucao({ ...selectTrocaDevolucao, operacao: event.target.value })}
                        >
                            <MenuItem value={'Troca'}>Troca</MenuItem>
                            <MenuItem value={'Devolucao'}>Devolucao</MenuItem>
                        </Select>
                    </FormControl>
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
                        value={pedidoSelecionado.status}
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
                                    <TableCell align="right"></TableCell>
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
                                            <Button id='cypress-moreoptionpedidos' onClick={(e) => handleClickMoreOptions(e, pedido)} sx={{ height: '.5rem' }}>
                                                <MoreHorizIcon />
                                            </Button>
                                            <Menu
                                                anchorEl={anchorEl}
                                                open={openMenu}
                                                onClose={() => setOpenMenu(false)}
                                            >
                                                {isAdmin && (<MenuItem id='cypress-adm-alterar-status-pedido' onClick={handleOpenDialogStatus}>Alterar Status</MenuItem>)}
                                                {!isAdmin && (<MenuItem id='cypress-solicitartroca' onClick={handleOpenDialogDevolucao}>Solicitar Troca/Devolução</MenuItem>)}
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