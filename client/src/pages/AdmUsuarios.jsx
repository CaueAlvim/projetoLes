import { useEffect, useState } from 'react';
import { Box, Button, Container, Divider, Grid, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import moment from 'moment';
import ClienteService from '../services/ClienteService';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function AdmUsuarios() {
    const [filter, setFilter] = useState({ nome: '', dataInicial: '2024-01-01', dataFinal: moment().format('YYYY-MM-DD') });
    const [listaUsuarios, setListaUsuarios] = useState([]);
    const [userSelecionadoCodigo, setUserSelecionadoCodigo] = useState();

    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        fetchUsuarios();
    }, []);

    const fetchUsuarios = async () => {
        try {
            const lista = await ClienteService.search(filter);
            setListaUsuarios(lista);
        } catch (error) {
            console.error(error)
        }
    }

    const handleClickMoreOptions = (event, itemSelecinado) => {
        setAnchorEl(event.currentTarget);
        setUserSelecionadoCodigo(itemSelecinado.id);
        setOpenMenu(true);
    }

    const handleInativarUser = async () => {
        try {
            await ClienteService.inativar(userSelecionadoCodigo);
            window.location.reload();
            console.log("Usuário excluido com sucesso!");
        } catch (error) {
            console.error("Falha ao excluir:", error);
        }
    }

    return (
        <Grid container sx={{ display: 'flex', justifyContent: 'center', backgroundColor: '#f1f1f1', alignItems: 'center' }}>
            <Paper elevation={3} sx={{ width: '75%', height: 'auto' }}>
                <Typography variant="h4" sx={{ ml: 2, mt: 2 }}>
                    Usuários cadastrados
                </Typography>

                <Divider variant='fullWidth' sx={{ width: '100%', margin: ' auto', bgcolor: 'black' }} />
                <Container fixed sx={{ mt: 3, mb: 5 }}>
                    <Typography variant="h6">Pesquisar:</Typography>
                    <Grid container spacing={1} sx={{ display: 'flex', justifyContent: 'center', width: '100%', mt: .3 }}>
                        <Grid item xs={6}>
                            <TextField id="filled-basic"
                                label="Nome usuário"
                                variant="filled"
                                fullWidth
                                value={filter.nome}
                                onChange={(event) => setFilter({ ...filter, nome: event.target.value })} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="filled-basic"
                                label="Data Inicial de Cadastro"
                                type='date'
                                variant="filled"
                                fullWidth
                                value={filter.dataInicial}
                                onChange={(event) => setFilter({ ...filter, dataInicial: event.target.value })} />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="filled-basic"
                                label="Data Final de Cadastro"
                                type='date'
                                variant="filled"
                                fullWidth
                                value={filter.dataFinal}
                                onChange={(event) => setFilter({ ...filter, dataFinal: event.target.value })} />
                        </Grid>
                    </Grid>
                </Container>

                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} >
                    <Button id='cypress-admusersearch' onClick={fetchUsuarios} sx={{ mb: 2, mr: 5 }}> Pesquisar</Button>
                </Box>

                <Divider variant='fullWidth' sx={{ width: '97%', margin: ' auto' }} />

                {listaUsuarios.length > 0 && (
                    <Container fixed sx={{ my: 5 }}>
                        <TableContainer id='cypress-admusertablecontainer' component={Paper} sx={{ width: '100%' }}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead sx={{ bgcolor: '#e0e0e0' }}>
                                    <TableRow>
                                        <TableCell>Nome do usuário</TableCell>
                                        <TableCell>Email</TableCell>
                                        <TableCell>Cpf</TableCell>
                                        <TableCell>Telefone</TableCell>
                                        <TableCell align='right'>Membro desde</TableCell>
                                        <TableCell align="right"></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {listaUsuarios.map((row) => (
                                        <TableRow key={row.cpf}>
                                            <TableCell component="th" scope="row">
                                                {row.nome}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.email}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.cpf}
                                            </TableCell>
                                            <TableCell component="th" scope="row">
                                                {row.telefone}
                                            </TableCell>
                                            <TableCell align="right">
                                                {moment(row.dataCadastro).format('DD/MM/YYYY')}
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button id='cypress-moreoptionsusers' onClick={(e) => handleClickMoreOptions(e, row)} sx={{ height: '.5rem' }}>
                                                    <MoreHorizIcon />
                                                </Button>
                                                <Menu
                                                    anchorEl={anchorEl}
                                                    open={openMenu}
                                                    onClose={() => setOpenMenu(false)}
                                                >
                                                    <MenuItem id='cypress-moreoptionsusersdelete' onClick={handleInativarUser}>Inativar Usuário</MenuItem>
                                                </Menu>
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

export default AdmUsuarios;