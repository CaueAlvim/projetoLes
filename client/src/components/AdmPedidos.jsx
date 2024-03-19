import { Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import moment from 'moment';

function AdmPedidos() {

    const pedidosTable = [
        { numero: '1111111111', usuario: 'NOMEUSUARIO1', dataPedido: '2023-12-02' },
        { numero: '2222222222', usuario: 'NOMEUSUARIO2', dataPedido: '2023-12-30' },
        { numero: '3333333333', usuario: 'NOMEUSUARIO3', dataPedido: '2023-12-03' },
        { numero: '4444444444', usuario: 'NOMEUSUARIO4', dataPedido: '2023-12-04' },
        { numero: '5555555555', usuario: 'NOMEUSUARIO5', dataPedido: '2023-12-05' },
        { numero: '6666666666', usuario: 'NOMEUSUARIO6', dataPedido: '2023-12-06' },
    ];


    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }}>
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

                <Divider variant='fullWidth' sx={{width: '97%', margin: ' auto' }} />

                <Container fixed sx={{ my: 5 }}>
                    <TableContainer component={Paper} sx={{ width: '100%' }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                <TableRow>
                                    <TableCell>Nº do pedido</TableCell>
                                    <TableCell align="center">Feito por</TableCell>
                                    <TableCell align="right">Data do pedido</TableCell>
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
                                        <TableCell align="right">
                                            {moment(row.dataPedido).format('DD/MM/YYYY')}
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

export default AdmPedidos;