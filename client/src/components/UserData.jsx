import { Button, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import { useState } from 'react';
import moment from 'moment';

function UserData() {
    const [currentTab, setCurrentTab] = useState('CUPONS');

    const cupomTable = [
        { nome: 'AAAAAAAAAAAAAAAAAA', valor: 159.10 },
        { nome: 'BBBBBBBBBBBBBBBBBB', valor: 237 },
        { nome: 'CCCCCCCCCCCCCCCCCC', valor: 262 },
        { nome: 'FFFFFFFFFFFFFFFFFF', valor: 356 },
        { nome: 'DDDDDDDDDDDDDDDDDD', valor: 305 },
        { nome: 'EEEEEEEEEEEEEEEEEE', valor: 356 },
    ];

    const enderecosTable = [
        { rua: 'RUA 2', bairro:'BAIRRO A', numero: 1001 },
        { rua: 'RUA 3', bairro:'BAIRRO B', numero: 1002 },
        { rua: 'RUA 1', bairro:'BAIRRO C', numero: 1003 },
        { rua: 'RUA 4', bairro:'BAIRRO X', numero: 1004 },
        { rua: 'RUA 5', bairro:'BAIRRO Y', numero: 1005 },
        { rua: 'RUA 6', bairro:'BAIRRO Z', numero: 1006 },
    ];

    const cartoesTable = [
        { nome: 'NUMEROCARTAO1', validade: '2023-12-30' },
        { nome: 'NUMEROCARTAO2', validade: '2023-12-02' },
        { nome: 'NUMEROCARTAO3', validade: '2023-12-03' },
        { nome: 'NUMEROCARTAO4', validade: '2023-12-04' },
        { nome: 'NUMEROCARTAO5', validade: '2023-12-05' },
        { nome: 'NUMEROCARTAO6', validade: '2023-12-06' },
    ];

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ width: '75%', height: 'auto' }}>
                <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                    Minha conta
                </Typography>

                <Divider variant='fullWidth' sx={{ borderTop: '1px solid #e5e5e5', width: '100%', margin: ' auto', bgcolor: 'black' }} />

                <Grid container sx={{ display: 'flex', justifyContent: 'center', mt: 1 }}>
                    <Grid item xs={4}>
                        <Button variant="outlined" onClick={() => setCurrentTab('CUPONS')} endIcon={<ReceiptIcon />} sx={{ height: '3rem', mx: 1, width: '94%' }}>Cupons</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" onClick={() => setCurrentTab('ENDERECOS')} endIcon={<HomeIcon />} sx={{ height: '3rem', mx: 1, width: '94%' }}>Endereços</Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button variant="outlined" onClick={() => setCurrentTab('CARTOES')} endIcon={<CreditCardIcon />} sx={{ height: '3rem', mx: 1, width: '94%' }}>Cartões</Button>
                    </Grid>
                </Grid>

                {currentTab === 'CUPONS' && (
                    <Container fixed sx={{ my: 5 }}>
                        <TableContainer component={Paper} sx={{ width: '100%' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                    <TableRow>
                                        <TableCell>Cupom</TableCell>
                                        <TableCell align="right">Valor</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cupomTable.map((row) => (
                                        <TableRow key={row.nome}>
                                            <TableCell component="th" scope="row">
                                                {row.nome}
                                            </TableCell>
                                            <TableCell align="right">
                                                {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(row.valor)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                )}

                {currentTab === 'ENDERECOS' && (
                    <Container fixed sx={{ my: 5 }}>
                        <TableContainer component={Paper} sx={{ width: '100%' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                    <TableRow>
                                        <TableCell>Rua</TableCell>
                                        <TableCell align="center">Bairro</TableCell>
                                        <TableCell align="right">Numero</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {enderecosTable.map((row) => (
                                        <TableRow key={row.rua}>
                                            <TableCell component="th" scope="row">
                                                {row.rua}
                                            </TableCell>
                                            <TableCell align="center">
                                                {row.bairro}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.numero}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                )}

                {currentTab === 'CARTOES' && (
                    <Container fixed sx={{ my: 5 }}>
                        <TableContainer component={Paper} sx={{ width: '100%' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                    <TableRow>
                                        <TableCell>Cartão</TableCell>
                                        <TableCell align="right">Validade</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {cartoesTable.map((row) => (
                                        <TableRow key={row.nome}>
                                            <TableCell component="th" scope="row">
                                                {row.nome}
                                            </TableCell>
                                            <TableCell align="right">
                                                {moment(row.validade).format('DD/MM/YYYY')}
                                            </TableCell>

                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>
                )}


            </Paper>
        </Grid>
    )
}

export default UserData;