import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Checkbox, TextField } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PedidoTrocaService from '../services/PedidoTrocaService'
import PedidoVendaService from '../services/PedidoVendaService';

function ModalSolicitarTroca({ open, setOpen, listaItensPedido, pedidoSelecionadoId }) {
    const [itensSelecionados, setItensSelecionados] = useState([]);
    const [quantidadeTroca, setQuantidadeTroca] = useState({});

    const handleSolicitarPedido = async () => {
        try {
            const pedidoForm = itensSelecionados.map(id => ({
                pedidoVendaId: pedidoSelecionadoId,
                livroId: id,
                quantidadeSolicitada: parseInt(quantidadeTroca[id]) || 0
            }));

            for (const item of pedidoForm) {
                await PedidoTrocaService.solicitarPedido(item);
            }

            await PedidoVendaService.alterarStatus(pedidoSelecionadoId, 'EM TROCA');
            toast.success("Solicitação confluída!", {
                toastId: 'trade-success',
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_LEFT
            });
            setTimeout(() => {
                window.location.reload();
            }, 2500);
            setOpen();
        } catch (error) {
            toast.error(error.toString(), {
                toastId: 'trade-fail',
                autoClose: 2000,
                position: toast.POSITION.BOTTOM_LEFT
            });
        }
    }

    const handleCheckAllItens = (event) => {
        if (event.target.checked) {
            setItensSelecionados(listaItensPedido.map(item => item.id));
            return;
        }
        setItensSelecionados([]);
    };

    const handleCheckItem = (id) => {
        const isAlreadySelected = itensSelecionados?.includes(id);

        const newSelected = isAlreadySelected ?
            itensSelecionados?.filter(item => item !== id)
            :
            [...(itensSelecionados || []), id];

        setItensSelecionados(newSelected);
    };

    const handleQuantityChange = (id, value) => {
        setQuantidadeTroca(prevQuantidadeTroca => ({
            ...prevQuantidadeTroca,
            [id]: value
        }));
    };

    return (
        <>

            <Dialog
                open={open}
                onClose={setOpen}
                fullWidth={true}
                maxWidth={'lg'}
            >
                <DialogTitle>{"Deseja solicitar a troca deste pedido?"}</DialogTitle>
                <DialogContent >

                    <Typography variant="body1" sx={{ mt: 3 }}>
                        Selecionar itens do pedido:
                    </Typography>

                    <TableContainer component={Paper} sx={{ width: '100%', mt: 1 }}>
                        <Table aria-label="simple table">
                            <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                <TableRow>
                                    <TableCell padding='checkbox'>
                                        <Checkbox
                                            color="primary"
                                            indeterminate={itensSelecionados?.length > 0 && itensSelecionados?.length < listaItensPedido?.length}
                                            checked={itensSelecionados?.length === listaItensPedido?.length && listaItensPedido?.length > 0}
                                            onChange={handleCheckAllItens}
                                        />
                                    </TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Livro</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: 'bold' }}>Quantidade</TableCell>
                                    <TableCell align="right" sx={{ fontWeight: 'bold' }}>Valor</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {listaItensPedido.map((item, index) => {
                                    const isItemSelected = itensSelecionados?.indexOf(item?.id) !== -1;
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={item?.id}
                                            selected={isItemSelected}
                                            sx={{ cursor: 'pointer' }}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    onClick={() => handleCheckItem(item?.id)}
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>

                                            <TableCell align="center" component="th" scope="row">
                                                {item?.titulo}
                                            </TableCell>
                                            <TableCell align="center">
                                                <TextField
                                                    id="outlined-number"
                                                    type="number"
                                                    value={quantidadeTroca[item?.id] || 0}
                                                    inputProps={{
                                                        min: 0,
                                                        max: item.quantidadeUnitaria
                                                    }}
                                                    InputLabelProps={{
                                                        shrink: true,
                                                    }}
                                                    onChange={(event) => handleQuantityChange(item?.id, event.target.value)}
                                                />
                                            </TableCell>
                                            <TableCell align="right">
                                                R${(item?.valorUnitario).toFixed(2)}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSolicitarPedido}>Seguir</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default ModalSolicitarTroca;