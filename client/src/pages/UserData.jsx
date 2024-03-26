import { useEffect, useState } from 'react';
import { Box, Button, Container, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import moment from 'moment';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PersonIcon from '@mui/icons-material/Person';
import ClienteService from '../services/ClienteService';

function UserData() {
    const [currentTab, setCurrentTab] = useState('DADOS');
    const [userData, setUserData] = useState({ nome: '', email: '', senha: '', cpf: '', telefone: '' });

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const userObject = JSON.parse(storedUser);
            fetchUser(userObject);
        }
    }, [currentTab === 'DADOS']);

    const fetchUser = async (userToFetch) => {
        const fetchedUser = await ClienteService.carregar(userToFetch.id);
        setUserData(fetchedUser);
    }

    const handleAlterarUsuario = async () => {
        try {
            await ClienteService.salvar(userData);
            window.location.reload();
            console.log("Alteração realizada com sucesso!");
        } catch (error) {
            console.error("Falha nas alterações:", error);
        }
    }

    const cupomTable = [
        { nome: 'AAAAAAAAAAAAAAAAAA', valor: 159.10 },
        { nome: 'BBBBBBBBBBBBBBBBBB', valor: 237 },
        { nome: 'CCCCCCCCCCCCCCCCCC', valor: 262 },
        { nome: 'FFFFFFFFFFFFFFFFFF', valor: 356 },
        { nome: 'DDDDDDDDDDDDDDDDDD', valor: 305 },
        { nome: 'EEEEEEEEEEEEEEEEEE', valor: 356 },
    ];

    const enderecosTable = [
        { rua: 'RUA 2', bairro: 'BAIRRO A', numero: 1001 },
        { rua: 'RUA 3', bairro: 'BAIRRO B', numero: 1002 },
        { rua: 'RUA 1', bairro: 'BAIRRO C', numero: 1003 },
        { rua: 'RUA 4', bairro: 'BAIRRO X', numero: 1004 },
        { rua: 'RUA 5', bairro: 'BAIRRO Y', numero: 1005 },
        { rua: 'RUA 6', bairro: 'BAIRRO Z', numero: 1006 },
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
                    <Grid item xs={3}>
                        <Button variant="outlined" onClick={() => setCurrentTab('DADOS')} endIcon={<PersonIcon />} sx={{ height: '3rem', mx: 1, width: '94%' }}>Meus dados</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" onClick={() => setCurrentTab('CUPONS')} endIcon={<ReceiptIcon />} sx={{ height: '3rem', mx: 1, width: '94%' }}>Cupons</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" onClick={() => setCurrentTab('ENDERECOS')} endIcon={<HomeIcon />} sx={{ height: '3rem', mx: 1, width: '94%' }}>Endereços</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="outlined" onClick={() => setCurrentTab('CARTOES')} endIcon={<CreditCardIcon />} sx={{ height: '3rem', mx: 1, width: '94%' }}>Cartões</Button>
                    </Grid>
                </Grid>
                {currentTab === 'DADOS' && (
                    <Container fixed sx={{ my: 5 }}>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Nome completo"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.nome}
                            onChange={(event) => setUserData({ ...userData, nome: event.target.value })}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.cpf}
                            onChange={(event) => setUserData({ ...userData, cpf: event.target.value })}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="telefone"
                            name="telefone"
                            label="Telefone"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.telefone}
                            onChange={(event) => setUserData({ ...userData, telefone: event.target.value })}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="email"
                            name="email"
                            label="E-mail"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={userData.email}
                            onChange={(event) => setUserData({ ...userData, email: event.target.value })}
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="password"
                            name="password"
                            label="Senha"
                            type="password"
                            fullWidth
                            variant="standard"
                            value={userData.senha}
                            onChange={(event) => setUserData({ ...userData, senha: event.target.value })}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '2rem' }}>
                            <Button variant='contained' onClick={handleAlterarUsuario}>
                                alterar
                            </Button>
                        </Box>
                    </Container>
                )}

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